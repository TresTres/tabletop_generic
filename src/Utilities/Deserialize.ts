// Deserialization Classes
import { DSArtificer } from "../Classes/Artificer/Artificer";
import { DSBarbarian } from "../Classes/Barbarian/Barbarian";
import { DSBard } from "../Classes/Bard/Bard";
import { DSCleric } from "../Classes/Cleric/Cleric";
import { DSDruid } from "../Classes/Druid/Druid";
import { DSFighter } from "../Classes/Fighter/Fighter";
import { DSMonk } from "../Classes/Monk/Monk";
import { DSPaladin } from "../Classes/Paladin/Paladin";
import { PlayerClass } from "../Classes/PlayerClass";
import { DSRanger } from "../Classes/Ranger/Ranger";
import { DSRogue } from "../Classes/Rogue/Rogue";
import { DSSorcerer } from "../Classes/Sorcerer/Sorcerer";
import { DSWarlock } from "../Classes/Warlock/Warlock";
import { DSWizard } from "../Classes/Wizard/Wizard";

// Deserialization Races
import { DSRace, Race } from "../Races/Race";
import { DSDarkElf } from "../Races/Elf/Subrace/DarkElf";
import { DSFireGenasi } from "../Races/Genasi/Subrace/FireGenasi";
import { DSWaterGenasi } from "../Races/Genasi/Subrace/WaterGenasi";
import { DSDragonborn } from "../Races/Dragonborn/Dragonborn";
import { DSTiefling } from "../Races/Tiefling/Tiefling";

// Subclasses (Called when deserializing a character with a subclass.)
import { Subclass, SubclassParams } from "../Classes/Subclass";
import { ArtificerSubclass } from "../Classes/Artificer/Subclasses/ArtificerSubclass";
import { BarbarianSubclass } from "../Classes/Barbarian/Subclasses/BarbarianSubclass";
import { BardSubclass } from "../Classes/Bard/Subclasses/BardSubclass";
import { ClericSubclass } from "../Classes/Cleric/Subclasses/ClericSubclass";
import { DruidSubclass } from "../Classes/Druid/Subclasses/DruidSubclass";
import { FighterSubclass } from "../Classes/Fighter/Subclasses/FighterSubclass";
import { MonkSubclass } from "../Classes/Monk/Subclasses/MonkSubclass";
import { PaladinSubclass } from "../Classes/Paladin/Subclasses/PaladinSubclass";
import { RangerSubclass } from "../Classes/Ranger/Subclasses/RangerSubclass";
import { RogueSubclass } from "../Classes/Rogue/Subclasses/RogueSubclass";
import { SorcererSubclass } from "../Classes/Sorcerer/Subclasses/SorcererSubclass";
import { WarlockSubclass } from "../Classes/Warlock/Subclasses/WarlockSubclass";
import { WizardSubclass } from "../Classes/Wizard/Subclasses/WizardSubclass";

export class Deserialize {
    
    static deserializePlayerClasses(classNames: string[]): PlayerClass[] {

        let classes = []
        
        for( const className of classNames) {
            switch(className) {
                case "Artificer":
                    classes.push(new DSArtificer());
                    break;
                case "Barbarian":
                    classes.push(new DSBarbarian());
                    break;
                case "Bard":
                    classes.push(new DSBard());
                    break;
                case "Cleric":
                    classes.push(new DSCleric());
                    break;
                case "Druid":
                    classes.push(new DSDruid());
                    break;
                case "Fighter":
                    classes.push(new DSFighter());
                    break;
                case "Monk":
                    classes.push(new DSMonk());
                    break;
                case "Paladin":
                    classes.push(new DSPaladin());
                    break;
                case "Ranger":
                    classes.push(new DSRanger());
                    break;
                case "Rogue":
                    classes.push(new DSRogue());
                    break;
                case "Sorcerer":
                    classes.push(new DSSorcerer());
                    break;
                case "Warlock":
                    classes.push(new DSWarlock());
                    break;
                case "Wizard":
                    classes.push(new DSWizard());
                    break;
            }
        }
        
        return classes;
    }

    static deserializeSubclass(className: string, subclassSelection: SubclassParams): Subclass {
        
        switch(className) {
            case "Artificer":
                return new ArtificerSubclass(subclassSelection);
            
            case "Barbarian":
                return new BarbarianSubclass(subclassSelection);
                
            case "Bard":
                return new BardSubclass(subclassSelection);
            
            case "Cleric":
                return new ClericSubclass(subclassSelection);
            
            case "Druid":
                return new DruidSubclass(subclassSelection);
            
            case "Fighter":
                return new FighterSubclass(subclassSelection);
            
            case "Monk":
                return new MonkSubclass(subclassSelection);
            
            case "Paladin":
                return new PaladinSubclass(subclassSelection);
            
            case "Ranger":
                return new RangerSubclass(subclassSelection);
            
            case "Rogue":
                return new RogueSubclass(subclassSelection);
            
            case "Sorcerer":
                return new SorcererSubclass(subclassSelection);
            
            case "Warlock":
                return new WarlockSubclass(subclassSelection);
            
            case "Wizard":
                return new WizardSubclass(subclassSelection);
        }        
    }

    // This needs to be updated with all races w/ abilities at levels - possibly all Genasi, and all new classes that fit the bill.
    static deserializeRace(race: string): Race {

        // Edge case for Dragonborn - race title formatting is weird.
        if(race.includes("Dragonborn")){
            const draconicAncestry = race.split(" - ")[1]
            return new DSDragonborn({draconicAncestry: draconicAncestry});
        }

        switch(race) {
            case "Fire Genasi":
                return new DSFireGenasi();
            
            case "Water Genasi":
                return new DSWaterGenasi();
            
            case "Dark Elf":
                return new DSDarkElf();
            
            case "Tiefling":
                return new DSTiefling();
            
            default:
                return new DSRace();
        }
    }
}