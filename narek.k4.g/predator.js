let LivingCreature = require("./LivingCreature");
module.exports = class Predator extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 9;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.x + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2]

        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character)
    }

    mul() {
        var newCell = random(this.chooseCell(0));
        if (this.energy >= 11 && newCell) {
            var newPredator = new Predator(newCell[0], newCell[1], 3);
            PredatorArr.push(newPredator);
            matrix[newCell[1]][newCell[0]] = 3;
            this.energy = 9;
        }
    }
    move() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            this.energy--;
            var x = newCell[0];
            var y = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[y][x] = 3;
            this.x = x;
            this.y = y;

        }


    }
    eat() {
        var grassEater = random(this.chooseCell(2));
        if (grassEater) {
            var x = grassEater[0];
            var y = grassEater[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            for (var i in grassEaterArr) {
                if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }

            this.x = x;
            this.y = y;
            this.energy += 2;

        }

    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;

            for (var i in PredatorArr) {
                if (this.x == PredatorArr[i].x && this.y == PredatorArr[i].y)
                    PredatorArr.splice(i, 1);
                break;
            }

        }

    }

}