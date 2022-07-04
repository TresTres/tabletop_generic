import { Elf } from "../Elf";
import { PlayerCharacter } from "../../../Character/PlayerCharacter";
import * as traits from "../Elf.json";
import * as languages from "../../../../Assets/Languages.json";
import * as Spells from "../../../../Assets/Spells.json";
import { ISpell, Spell } from "../../../Character/Interfaces";

export class WoodElf extends Elf {
    constructor() {
      super("Wood Elf");
      this.traits.push(traits["FLEET OF FOOT"], traits["MASK OF THE WILD"]);
      this.speed += 5;
      this.weaponProficiencies.push(
        "Longsword",
        "Shortsword",
        "Shortbow",
        "Longbow"
      );
    }
  
    abilitiesAtLevels = {};
  
    abilityIncrease(pc: PlayerCharacter): void {
      pc.abilityScores.dexterity.update(2);
      pc.abilityScores.wisdom.update(1);
    }
  
    proficiencies(pc: PlayerCharacter): void {
      pc.skills["perception"].proficient = true;
    }
  }