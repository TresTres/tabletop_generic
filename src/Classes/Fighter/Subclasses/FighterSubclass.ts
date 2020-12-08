
import { Subclass } from "../../Subclass";
import { Champion } from "./Champion/Champion";
import { BattleMaster } from "./BattleMaster/BattleMaster";
import { EldritchKnight } from "./EldritchKnight/EldritchKnight";
import {ArcaneArcher } from "./ArcaneArcher/ArcaneArcher";

export class FighterSubclass extends Subclass {
  constructor(subclass: string){
    super(subclass);
  }
    
  subclassDictionary = {
        CHAMPION: {
          "3": Champion.champion3,
          "7": Champion.champion7,
          "10": Champion.champion10,
          "15": Champion.champion15,
          "18": Champion.champion18,
        },
        "BATTLE MASTER": {
          "3": BattleMaster.battleMaster3,
          "7": BattleMaster.battleMaster7,
          "10": BattleMaster.battleMaster10,
          "15": BattleMaster.battleMaster15,
          "18": BattleMaster.battleMaster18,
        },
        "ELDRITCH KNIGHT": {
          "3": EldritchKnight.eldritchKnight3,
          "4": EldritchKnight.eldritchKnight4,
          "7": EldritchKnight.eldritchKnight7,
          "8": EldritchKnight.eldritchKnight8,
          "10": EldritchKnight.eldritchKnight10,
          "11": EldritchKnight.eldritchKnight11,
          "13": EldritchKnight.eldritchKnight13,
          "14": EldritchKnight.eldritchKnight14,
          "15": EldritchKnight.eldritchKnight15,
          "16": EldritchKnight.eldritchKnight16,
          "18": EldritchKnight.eldritchKnight18,
          "19": EldritchKnight.eldritchKnight19,
          "20": EldritchKnight.eldritchKnight20,
        },
        "ARCANE ARCHER": {
          "3": ArcaneArcher.arcaneArcher3,
          "7": ArcaneArcher.arcaneArcher7,
          "10": ArcaneArcher.arcaneArcher10,
          "15": ArcaneArcher.arcaneArcher15,
          "18": ArcaneArcher.arcaneArcher18,
        }
      };
}



