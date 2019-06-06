'use strict';

function createCharacter(name, nickname, race, origin, attack, defense ){
  return {
    name, 
    nickname,
    race,
    origin,
    attack,
    defense,
    describe(){
      return `${this.name} is a ${this.race} from ${this.origin}`; 
    },
    evaluateFight: function(character){
      let x = 0;
      let y = 0;
      if (this.defense > character.attack){
        x = this.attack - character.defense;
        y = character.attack - this.defense;
      }
      return `Your opponent takes ${x} damage and you receive ${y} damage`;
    }
  };
}
let characters = [createCharacter('gandalf the white', 'gandalf', 'Wizard', 'middle Earth', 10, 6 ), 
  createCharacter('bilbo baggins', 'bilbo', 'hobbit', 'shire', 2, 1 ),
  createCharacter('Legolas', 'glegolas', 'elf', 'neilfheim', 8, 5 ) ];

console.log(characters[0].evaluateFight(characters[1]));