let LivingCreature = require("./LivingCreature");
 module.exports = class Grass extends LivingCreature {
    constructor(x, y) {
        super(x,y)
       
        this.multiply = 0;
        

    }
    
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= 5 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], 1);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }


}
