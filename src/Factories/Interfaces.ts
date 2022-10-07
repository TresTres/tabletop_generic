import { CharacterType, CharacterSize } from '../Character/BaseCharacter';

export interface SheetData {
  characterData: BaseCharacterData | null
  rulesData: BaseCharacterRules | null
}
export interface BaseCharacterData {
  size: CharacterSize
  type: CharacterType
  abilityScores: {
    [ability: string]: AbilityData
  }
}

export interface BaseCharacterRules {
  allowedAbilities: string[]
  linkedHealthAbility: string
}
export interface AbilityData {
  name: string
  abbreviation: string
  score: number
}
