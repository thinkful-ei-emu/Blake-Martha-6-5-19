'use strict';
const LORTchar = createCharacter();
let characters = [...createCharacter]


function createCharacter(){
  const char = {
    name, 
    nickname,
    race,
    origin,
    attack,
    defense,
    describe : function(){
      return `${this.name} is a ${this.race} from ${this.orgin}`; 
    },
    evaluateFight: function(character){
      return `Your opponent takes ${x} damage and you receive ${y} damage`;
    }
  };
  
}
