import {PlayerCharacter} from '../Base/PlayerCharacter';
import { Trait } from '../Base/Interfaces';
import * as Languages from '../Assets/Languages.json';

abstract class Background {
    abstract skillProficiencies: string[];
    abstract languages: string[];
    abstract toolProficiencies: string[];
    abstract equipment: string[];
    abstract features: Trait[];

    apply(pc: PlayerCharacter): void {
        for(const skill of this.skillProficiencies) { pc.skills[skill].proficient = true; }
        for(const language of this.languages) { pc.traits.languages.push(Languages[language]); }
        for(const toolProficiency of this.toolProficiencies) { pc.traits.toolProficiencies.push(toolProficiency); }
        // for(const item of this.equipment) { pc.inventory.items.push(Items[item]); }
        for(const trait of this.features) { pc.traits.features.push(trait); }
    }
}

export class Acolyte extends Background {
    constructor(languages: string[], holySymbol: string){
        super();
        this.languages = languages;
    }

    skillProficiencies = ["Insight", "Religion"];
    languages: string[];
    toolProficiencies = [];
    equipment = [];
    features = [{"title": "Shelter of the Faithful", "description": "As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can except to receive free healing and care at a temple, shrine, or other establishd presence of your faith, though you must provide any material components for spells.  Those who share your religion will support you (but only you) at a modest lifestyle. \n You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be at the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While newar your temple, you can call upon the priests for assistance, provided the assisatance you ask for is not hazardous and you remain in good standing with your temple."}];
}

export class Charlatan extends Background {
    constructor(){
        super();
    }

    skillProficiencies = ["Deception", "Sleight of Hand"];
    languages = [];
    toolProficiencies = ["Disguise Kit", "Forgery Kit"];
    equipment = [];
    features = [{"title": "False Identity", "description": "You have created a second identity that includes documentation, established acquintances, and disguises that allow you to assume that persona, Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy."}];
}

export class Criminal extends Background {
    constructor(gamingSet: string){
        super();
        this.toolProficiencies.push(gamingSet);
    }

    skillProficiencies = ["Deception", "Stealth"];
    languages = [];
    toolProficiencies = ["Thieves' Tools"];
    equipment = [];
    features = [{"title": "Criminal Contact", "description": "You have a reliable and trustworthy contact who act as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you."}];
}

export class Spy extends Criminal { }  // Variant Background - Add descriptions for each background (?)

export class Entertainer extends Background {
    constructor(musicalInstrument: string){
        super();
        this.toolProficiencies.push(musicalInstrument);
    }

    skillProficiencies = ["Acrobatics", "Performance"];
    languages = [];
    toolProficiencies = ["Disguise Kit"];
    equipment = [];
    features = [{"title": "By Popular Demand", "description": "You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble's court. At such a place, you receive free lodging and food of a modest or comfortable standard (depending onthe quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you."}];
}

export class Gladiator extends Entertainer { } // Variant Background

export class FolkHero extends Background {
    constructor(artisansTool: string){
        super();
        this.toolProficiencies.push(artisansTool);
    }

    skillProficiencies = ["Animal Handling", "Survival"];
    languages = [];
    toolProficiencies = ["Vehicles, land"];
    equipment = [];
    features = [{"title": "Rustic Hospitality", "description": "Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you."}];
}

export class GuildArtisan extends Background {
    constructor(artisansTool: string, language: string){
        super();
        this.toolProficiencies = [artisansTool];
        this.languages = [language];
    }

    skillProficiencies = ["Insight", "Persuasion"];
    languages: string[];
    toolProficiencies: string[];
    equipment = [];
    features = [{"title": "Guild Membership", "description": "As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings. Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild's coffers. You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild's good graces."}];
}

export class Hermit extends Background {
    constructor(language: string){
        super();
        this.languages = [language];
    }

    skillProficiencies = ["Medicine", "Religion"];
    languages: string[];
    toolProficiencies = ["Herbalism Kit"];
    equipment = [];
    features = [{"title": "Discovery", "description": "The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a treat truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen. You might have uncovered a fact that has long been forgotten, or unearthed some relic of the past that could reqrite history. It might be information that would be damaging to the people who or consigned you to exile, and hence the reason for your return to society."}];
}

export class Noble extends Background {
    constructor(gamingSet: string, language: string){
        super();
        this.languages = [language];
        this.toolProficiencies = [gamingSet];
    }

    skillProficiencies = ["History", "Persuasion"];
    languages: string[];
    toolProficiencies: string[];
    equipment = [];
    features = [{"title": "Position of Privilege", "description": "Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wwherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere, You can secure an audience with a local noble if you need to."}];
}

export class Knight extends Noble {
    features = [{"title": "Retainers", "description": "You have the service of three retainers loyal to your family. These retainers can be attendants or messengers, and one might be a majordomo. Your retainers are commoners who can perform mundane tasks for you, but they do not fight for you, will not follow you into obviously dangerous areas (such as dungeons), and will leave if they are frequently endangered or abused."}];
}

export class Outlander extends Background {
    constructor(musicalInstrument: string, language: string){
        super();
        this.languages = [language];
        this.toolProficiencies = [musicalInstrument];
    }

    skillProficiencies = ["Athletics", "Survival"];
    languages: string[];
    toolProficiencies: string[];
    equipment = [];
    features = [{"title": "Wanderer", "description": "You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth."}];
}

export class Sage extends Background {
    constructor(languages: string[]){
        super();
        this.languages = languages;
    }

    skillProficiencies = ["Arcana", "History"];
    languages: string[];
    toolProficiencies = [];
    equipment = [];
    features = [{"title": "Research", "description": "When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature."}];
}

export class Sailor extends Background {
    constructor(){
        super();
    }

    skillProficiencies = ["Athletics", "Perpection"];
    languages = [];
    toolProficiencies = ["Navigator's tools, Vehicles, water"];
    equipment = [];
    features = [{"title": "Ship's Passage", "description": "When you need to, you can secure free passage on a siling ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship you have good relations with (perhaps one captained by former crewmate). Because you're calling in a favor, you can't be certain of a schedule or route that will meet your every need. In return for your free passage, you and your companions are expected to assist the crew during voyage."}];
}

export class Pirate extends Sailor {
    features = [{"title": "Bad Reputation", "description": "No matter where you go, people are afraid of you due to your reputation. When you are in a civilized settlement, you can get away with minor criminal offenses, such as refusing to pay for food at a tavern or breaking down doors at a local shop, since most people will not report your activity to the authorities."}]
}

export class Soldier extends Background {
    constructor(gamingSet: string){
        super();
        this.toolProficiencies.push(gamingSet);
    }

    skillProficiencies = ["Athletics", "Perpection"];
    languages = [];
    toolProficiencies = ["Vehicles, land"]
    equipment = [];
    features = [{"title": "Military Rank", "description": "You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence. and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized."}];
}

export class Urchin extends Background {
    constructor(){
        super();
    }

    skillProficiencies = ["Sleight of Hand", "Stealth"];
    languages = [];
    toolProficiencies = ["Disguise Kit", "Thieves' Tools"];
    equipment = [];
    features = [{"title": "City Secrets", "description": "You know the secret patterns and flow to cities and can find passages through the urban sprawl that other would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow."}];
}