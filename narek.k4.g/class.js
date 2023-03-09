class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= 5 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }


}

class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;

        this.index = index;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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
        var grass = random(this.chooseCell(1));
        if (grass) {
            var x = grass[0];
            var y = grass[1];
            matrix[y][x] = this.index;
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
            var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
            grassEaterArr.push(newGrassEater);
            matrix[newCell[1]][newCell[0]] = this.index;
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

class Predator {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 9;

        this.index = index;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {
        var newCell = random(this.chooseCell(0));
        if (this.energy >= 11 && newCell) {
            var newPredator = new Predator(newCell[0], newCell[1], this.index);
            PredatorArr.push(newPredator);
            matrix[newCell[1]][newCell[0]] = this.index;
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
            matrix[y][x] = this.index;
            this.x = x;
            this.y = y;

        }


    }
    eat() {
        var grassEater = random(this.chooseCell(2));
        if (grassEater) {
            var x = grassEater[0];
            var y = grassEater[1];

            matrix[y][x] = this.index;
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
class MostOfAll {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 18;
        this.index = index;
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
    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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



class Men {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 13;
        this.index = index;



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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {

        var newCell = random(this.chooseCell(0));
        if (this.energy >= 15 && newCell) {
            var newMen = new Men(newCell[0], newCell[1], this.index);
            MenArr.push(newMen);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 13;

        }
    }
    Walking() {
        var walking = [];
        var newCell = random(this.chooseCell(1));
        var newCell1 = random(this.chooseCell(0));
        walking.push(newCell, newCell1);
        var wal = random(walking);

        if (wal) {
            if (wal == newCell) {
                this.energy--;
                var x = newCell[0];
                var y = newCell[1];
                matrix[y][x] = this.index;
                matrix[this.y][this.x] = 1;
                var newMen = new Men(newCell[0], newCell[1], this.index);
                MenArr.push(newMen);
                this.x = x;
                this.y = y;
            }
            else if (wal == newCell1) {
                this.energy--;
                var x1 = newCell1[0];
                var y1 = newCell1[1];
                matrix[y1][x1] = this.index;
                matrix[this.y][this.x] = 0;
                var newMen = new Men(newCell1[0], newCell1[1], this.index);
                MenArr.push(newMen);
                this.x = x1;
                this.y = y1;

            }


        }


    }

    eat() {
        var utel = [];
        var newCell = random(this.chooseCell(4));
        var newCell1 = random(this.chooseCell(2));
        var newCell2 = random(this.chooseCell(3));
        utel.push(newCell, newCell1, newCell2);
        var eat = random(utel);
        if (eat) {
            if (newCell) {
                var x = newCell[0];
                var y = newCell[1];
                matrix[y][x] = this.index;
                matrix[this.y][this.x] = 0;
                for (var i in MostOfAllArr) {
                    if (x == MostOfAllArr[i].x && y == MostOfAllArr[i].y) {
                        MostOfAllArr.splice(i, 1);
                        break;
                    }
                }
                this.x = x;
                this.y = y;
            }
            else if (newCell1) {
                var x1 = newCell1[0];
                var y1 = newCell1[1];
                matrix[y1][x1] = this.index;
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
            else if (newCell2) {
                var x2 = newCell2[0];
                var y2 = newCell2[1];
                matrix[y2][x2] = this.index;
                matrix[this.y][this.x] = 0;
                for (var i in grassEaterArr) {
                    if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
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
            for (var i in MenArr) {
                if (this.x == MenArr[i].x && this.y == MenArr[i].y)
                    MenArr.splice(i, 1);
                break;
            }

        }

    }

}