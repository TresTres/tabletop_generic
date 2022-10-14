import { SheetData, BaseCharacterData, BaseCharacterRules } from './Interfaces';
import { resolve } from 'path';
import * as pv from 'path-validation';
import * as fs from 'fs';
import { CharacterFactory } from './CharacterFactory';
import { BaseCharacter } from 'Character/BaseCharacter';
import { searchInDictionary } from 'Utilities/General';
import { ValidationError } from 'Utilities/Errors';

export class SheetFactory {
  constructor (requiredFields: string[] = ['character']) {
    this._requiredFields = requiredFields;
  }

  private _sheetData: SheetData = {
    characterData: null,
    rulesData: null
  };

  private readonly _requiredFields: string[] = [];
  private readonly _defaultRulesPath: string = resolve(__dirname, '../Rulesets/DefaultCharacter5e.json');

  public deserializeFile (dataPath: string, rulesPath: string = this._defaultRulesPath): BaseCharacter {
    const cfactory: CharacterFactory = new CharacterFactory();
    this._loadRulesData(rulesPath);
    this._loadSheetData(dataPath);
    cfactory.charRuleSet = this._sheetData.rulesData as BaseCharacterRules;
    cfactory.loadCharacterFromData(this._sheetData.characterData as BaseCharacterData);
    return cfactory.character;
  }

  private _pullDataFromPath (path: string): object {
    /*
        Deserializes JSON file from path into object data
        - Expects an absolute path to a JSON file
        */
    if (pv.isAbsoluteLinuxPath(path) === false) {
      throw Error(`Invalid path: ${path}`);
    }
    const contents = fs.readFileSync(path, 'utf8');
    return JSON.parse(contents);
  }

  private _loadSheetData (path: string): void {
    /*
        Deserializes sheet JSON into data
        - Checks for required fields
        - Deserializes each required field
        - Returns the composition of deserialized data
        */
    const jsonObj: object = this._pullDataFromPath(path);
    const bcData: unknown | undefined = searchInDictionary('character', jsonObj);
    if (bcData === undefined) {
      throw new ValidationError('character', {}, 'Required field is empty');
    }
    this._sheetData.characterData = bcData as BaseCharacterData;
  }

  private _loadRulesData (path: string): void {
    /*
        Deserializes rules JSON into data
        - Provides character factory with rules that can be used
          to build characters
        - Checks for required fields
        - Deserializes each required field
        */
    const jsonObj: object = this._pullDataFromPath(path);
    const rData: unknown | undefined = searchInDictionary('rules', jsonObj);
    if (rData === undefined) {
      throw new ValidationError('rules', {}, 'Required field is empty');
    }
    this._sheetData.rulesData = rData as BaseCharacterRules;
  }
}
