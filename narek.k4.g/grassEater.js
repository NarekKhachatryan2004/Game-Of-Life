let LivingCreature = require("./LivingCreature");
module.exports = class GrassEater extends LivingCreature {
    constructor(x, y) {
        super(x,y)
        this.energy = 8;

    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
       return super.chooseCell(character)
    }

    move() {

        var newCell = random(this.chooseCell(0));

        if (newCell) {
            this.energy--;
            var x = newCell[0];
            var y = newCell[1];
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        }
    }

    eat() {
        var grass = random(this.chooseCell(1));
        if (grass) {
            var x = grass[0];
            var y = grass[1];
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;
            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }



            this.x = x;
            this.y = y;
            this.energy += 2;

        }

    }

    mul() {

        var newCell = random(this.chooseCell(0));
        if (this.energy >= 6 && newCell) {
            var newGrassEater = new GrassEater(newCell[0], newCell[1], 2);
            grassEaterArr.push(newGrassEater);
            matrix[newCell[1]][newCell[0]] = 2;
            this.energy = 5;

        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in grassEaterArr) {
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y)
                    grassEaterArr.splice(i, 1);
                break;
            }
        }
    }
}