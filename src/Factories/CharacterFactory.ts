import {
  CharacterType,
  CharacterSize
} from '../Character/BaseCharacter';
import { BaseCharacterData, BaseCharacterRules } from './Interfaces';
import {
  RuledCharacter,
  PlayerCharacter,
  NonPlayerCharacter
} from '../Character/CharacterClasses';

export class CharacterFactory {
  /*
    Responsible for creating a new character object.
    This factory holds state information:
        - The rules to apply to the character:
            + Race
            + Class(es)
            + Background
        - The character data itself
            + Abilities
            + Levels
            + Equipment
            + etc etc
    */
  constructor () {
    this._character = null;
    this._charRuleSet = null;
  }

  private _character: RuledCharacter | null;
  private _charRuleSet: BaseCharacterRules | null;

  get character (): RuledCharacter {
    if (this._charRuleSet == null) {
      throw new ReferenceError('_character accessed before initialization');
    }
    return this._character as RuledCharacter;
  }

  set charRuleSet (rules: BaseCharacterRules) {
    this._charRuleSet = rules;
  }

  public loadCharacterFromData (data: BaseCharacterData): void {
    /*
        Loads a character using non-serialized data.
        */
    if (this._charRuleSet == null) {
      throw new ReferenceError('_charRuleSet used before initialization');
    }
    switch (data.type) {
      case CharacterType.PC:
        this._character = new PlayerCharacter(data, this._charRuleSet);
        break;
      case CharacterType.NPC:
        this._character = new NonPlayerCharacter(data, this._charRuleSet);
        break;
      default:
        return undefined;
    }
  }

  public createNewCharacter (size: CharacterSize, type: CharacterType): void {
    /*
        Creates a new character from scratch, using the inputs and the stored rules.
        The resulting base data will contain defaults to be modified later.
        */
    const baseData: BaseCharacterData = {
      size,
      type,
      abilityScores: {}
    };
    this.loadCharacterFromData(baseData);
  }
}
