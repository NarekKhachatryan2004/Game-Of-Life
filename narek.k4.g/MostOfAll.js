class MostOfAll extends LivingCreature {
    constructor(x, y) {
        super(x,y)
        this.energy = 18;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 3, this.y - 3],
            [this.x - 2, this.y - 3],
            [this.x - 1, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 1, this.y - 3],
            [this.x + 2, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y - 2],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 3, this.y - 2],
            [this.x - 3, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x + 3, this.y - 1],
            [this.x - 3, this.y],
            [this.x + 2, this.y],
            [this.x - 1, this.y],
            [this.x, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x + 3, this.y],
            [this.x + 3, this.y + 1],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x + 3, this.y + 1],
            [this.x - 3, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 3, this.y + 2],
            [this.x - 3, this.y + 3],
            [this.x - 2, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 1, this.y + 3],
            [this.x + 2, this.y + 3],
            [this.x + 3, this.y + 3]
        ];

    }
    

    mul() {

        var newCell = random(this.chooseCell(0));
        if (this.energy >= 11 && newCell) {
            var newMostOfAll = new MostOfAll(newCell[0], newCell[1], this.index);
            MostOfAllArr.push(newMostOfAll);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 10;

        }
    }
    move() {

        var newCell = random(this.chooseCell(0));

        if (newCell) {
            this.energy--;
            var x = newCell[0];
            var y = newCell[1];
            matrix[y][x] = this.index;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }


    }
    eat() {
        var utel = [];

        var newCell = random(this.chooseCell(2));
        var newCell1 = random(this.chooseCell(3));
        var newCell2 = random(this.chooseCell(1));
        utel.push(newCell, newCell1, newCell2);
        var eat = random(utel);
        if (eat) {
            if (eat == newCell1) {
                var x = newCell1[0];
                var y = newCell1[1];

                matrix[y][x] = this.index;
                matrix[this.y][this.x] = 0;
                for (var i in PredatorArr) {
                    if (x == PredatorArr[i].x && y == PredatorArr[i].y) {
                        PredatorArr.splice(i, 1);
                        break;
                    }
                }
                this.x = x;
                this.y = y;
            }
            else if (eat == newCell) {
                var x1 = newCell[0];
                var y1 = newCell[1];

                matrix[y1][x1] = this.index
                matrix[this.y][this.x] = 0;
                for (var i in grassEaterArr) {
                    if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        break;
                    }
                }

                this.x = x1;
                this.y = y1;
            }

            else if (eat == newCell2) {
                var x2 = newCell2[0];
                var y2 = newCell2[1];

                matrix[y2][x2] = this.index
                matrix[this.y][this.x] = 0;
                for (var i in grassArr) {
                    if (x == grassArr[i].x && y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
                this.x = x2;
                this.y = y2;

            }


            this.energy += 2;


        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in MostOfAllArr) {
                if (this.x == MostOfAllArr[i].x && this.y == MostOfAllArr[i].y)
                    MostOfAllArr.splice(i, 1);
                break;
            }

        }

    }
}