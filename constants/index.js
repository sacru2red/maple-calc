const Warrior = {
  en: 'Warrior',
  ko: '전사',
  mainStat: 'STR',
  subStat: 'DEX'
}

const Archer = {
  en: 'Archer',
  ko: '궁수',
  mainStat: 'DEX',
  subStat: 'STR'
}

const Thief = {
  en: 'Thief',
  // 듀얼블레이드, 섀도어는 부스탯 힘
  ko: '도적',
  mainStat: 'LUK',
  subStat: 'DEX'
}

const Mage = {
  en: 'Mage',
  ko: '마법사',
  mainStat: 'INT',
  subStat: 'LUK'
}

const Pirate = {
  en: 'Pirate',
  ko: '해적',
  mainStat: 'STR',
  subStat: 'DEX'
}

export const classes = [
  Warrior,
  Archer,
  Thief,
  Mage,
  Pirate
]

export const stats = [
  { en: 'STR', ko: '힘' },
  { en: 'DEX', ko: '민첩' },
  { en: 'LUK', ko: '운' },
  { en: 'INT', ko: '지력' }
]

class Equipment {
    STR = 0
    DEX = 0
    LUK = 0
    INT = 0

    getStat () {
      return {
        STR: this.STR,
        DEX: this.DEX,
        LUK: this.LUK,
        INT: this.INT
      }
    }
}

class RootAbyss extends Equipment {

}

class Royal extends RootAbyss {
  constructor (classKind) {
    super()
    this.classKind = classKind
    const mainStat = this.classKind.mainStat
    console.log('classKind', classKind)
    const subStat = this.classKind.subStat
    this[mainStat] = 40
    this[subStat] = 40
  }
}

export class RoyalWarrior extends Royal {
  constructor () {
    super(Warrior)
  }
}

export class RoyalArcher extends Royal {
  constructor () {
    super(Archer)
  }
}

export class RoyalThief extends Royal {
  constructor () {
    super(Thief)
  }
}

export class RoyalMage extends Royal {
  constructor () {
    super(Mage)
  }
}

export class RoyalPirate extends Royal {
  constructor () {
    super(Pirate)
  }
}

export const getClassRoyal = (classKind) => {
  return classKind === Warrior.ko || classKind === Warrior.en
    ? new RoyalWarrior()
    : classKind === Archer.ko || classKind === Archer.en
      ? new RoyalArcher()
      : classKind === Thief.ko || classKind === Thief.en
        ? new RoyalThief()
        : classKind === Mage.ko || classKind === Mage.en
          ? new RoyalMage()
          : new RoyalPirate()
}
