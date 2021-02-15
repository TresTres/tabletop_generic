import { PlayerCharacter } from "../Base/PlayerCharacter"

export class Prereqs{
    static prereqChecks = {
        Level: Prereqs.checkLevel,
        Cantrip: Prereqs.checkSpell,
        Feature: Prereqs.checkFeature
    }

    static checkLevel(level: string, pc: PlayerCharacter){
        return pc.level.totalLevel >= parseInt(level) ? true : false
    }
    static checkSpell(spell: string, pc: PlayerCharacter){
        return pc.spells["0"].filter(x => x.name === spell) ? true : false
    }

    static checkFeature(feature: string, pc: PlayerCharacter){
        return pc.traits.features.filter(x => x.title === feature) ? true : false
    }
}