
// function setup() {
//     createCanvas(500,500);
//     background('#acacac');
// }
// function draw() {
//     fill(0, 0, 255);
//     var a = random(450);
//     var b = random(550);
//     ellipse(a, b, 40, 40);
// }
// function setup(){
//     createCanvas(500,500);
//     background('#acacac');
// }

// function draw(){
//     fill("red");
//     var a = random(500);
//     var b = random(500);
//     ellipse(a,b,50,50);
//     clear(a);
//     clear(b);
//     frameRate(4);
//     background('#acacac');
//     ellipse(a,b,12,12);
// }

// function setup(){
//     createCanvas(500,500);
//     background('#acacac');
// }

// function draw(){
//     fill("red");
//     var a = random(500);
//     var b = random(500);
//     var c = random(1,25);
//     ellipse(a,b,c,c);

// frameRate(4);
// background('#acacac');
// ellipse(a,b,c,c);
//}

// var matrix = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 2, 0],
//     [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 2, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 0],
//     [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 0],
//     [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
//     [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 2, 0, 2, 0, 1, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
//     [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 2, 2, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
//     [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 2, 2, 2, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
// ];
// var matrix = [];
// var side = 10;
// var n = 80;
// var m = 80;


// function setup() {
//     for (var y = 0; y < n; y++) {
//         matrix[y] = [];
//         for (x = 0; x < m; x++) {
//             matrix[y][x] = Math.round(random(1, 2));
//             console.log(matrix[y][x]);
//         }
//     }

//     createCanvas(matrix[0].length * side, matrix.length * side);
//     background('#acacac');
// }

// function draw() {
//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 0) {
//                 fill("white");
//                 rect(x * side, y * side, side, side);
//             }
//             else if (matrix[y][x] == 1) {
//                 fill("green");
//                 rect(x * side, y * side, side, side);
//             }
//             else if (matrix[y][x] == 2) {
//                 fill("yellow");
//                 rect(x * side, y * side, side, side);
//             }

//         }
//     }
// }
// }
// var matrix = [[1, 0, 0, 0, 0, 0, 0, 0],
//               [0, 1, 0, 0, 0, 0, 0, 0],
//               [0, 0, 1, 0, 0, 0, 0, 0],
//               [0, 0, 0, 1, 0, 0, 0, 0],
//               [0, 0, 0, 0, 1, 0, 0, 0],
//               [0, 0, 0, 0, 0, 1, 0, 0],
//               [0, 0, 0, 0, 0, 0, 1, 0],
//               [0, 0, 0, 0, 0, 0, 0, 1],
//               ];
//  var side = 50;

// function setup(){


//     createCanvas(401,401);
//      background('#acacac');

// }


// function draw(){
//     for(var y = 0; y < matrix.length; y++){
//         for(var x = 0; x < matrix[y].length; x++){
//             if(matrix[y][x]==1){
//                 fill(0,255,0);
//                 rect(x*side,y*side,side,side)
//             }
//             else{
//                 fill('#acacac')
//                 rect(x*side,y*side,side,side)
//             }
//         }
//      }



// }


//kanach gic

// var side = 50;
// var n = 8;

// function setup() {
//     createCanvas(n * side, n * side);
//     background('#acacac');
// }
// function draw() {
//     for (var y = 0; y < n; y++) {
//         for (x = 0; x < n; x++) {

//             if (y == x) {
//                 fill("green");
//                 rect(x * side, y * side, side, side);

//             }
//             else {
//                 fill('#acacac')
//                 rect(x * side, y * side, side, side);

//             }


//         }
//     }

// }




// var side = 50;
// var n = 8;

// function setup() {
//     createCanvas(n * side, n * side);
//     background('#acacac');
// }
// function draw() {
//     for (var y = 0; y < n; y++) {
//         for (x = 0; x < n; x++) {

//             if (x+y==7) {
//                 fill("red");
//                 rect(x * side, y * side, side, side);

//             }
//             else {
//                 fill('#acacac')
//                 rect(x * side, y * side, side, side);

//             }


//         }
//     }

// }



// var side = 50;
// var n = 8;

// function setup() {
//     createCanvas(n * side, n * side);
//     background('#acacac');
// }
// function draw() {
//     for (var y = 0; y < n; y++) {
//         for (x = 0; x < n; x++) {

//             if (x+y<=n-1) {
//                 fill("yellow");
//                 rect(x * side, y * side, side, side);

//             }
//             else {
//                 fill('#acacac')
//                 rect(x * side, y * side, side, side);

//             }


//         }
//     }

// }



// var side = 50;
// var n = 8;

// function setup() {
//     createCanvas(n * side, n * side);
//     background('#acacac');

// }
// function draw() {
//     for (var y = 0; y < n; y++) {
//         for (x = 0; x < n; x++) {

//             if ((x+y)%2==0) {
//                 fill("black");
//                 rect(x * side, y * side, side, side);


//             }
//             else {
//                 fill("white")
//                 rect(x * side, y * side, side, side);


//             }


//         }
//     }

// }




// var side = 50;
// var n = 11;
// function setup() {
//     createCanvas(n * side, n * side);
//     background('#acacac');

// }
// function draw() {
//     for (var y = 0; y < n; y++) {
//         for (x = 0; x < n; x++) {
//             fill('acacac');
//             rect(x * side, y * side, side, side);
//             if (y == 0 && x!= 0) {
//                 textSize(12);
//                 fill("black")
//                 text(x, (x*side)+side/2, side/2);

//             }
//             else if(x==0&&y!=0){
//                 textSize(12);
//                 fill("black");
//                 text(y,side/2,(y*side)+side/2);
//             }
//             else if(x!=0&&y!=0){
//                 textSize(12);
//                 fill("black")
//                 text(x*y, (x*side)+side/2, (y*side)+side/2);

//             }
//         }

//     }
//}



// var matrix = [
//     [0, 0, 1, 4, 4],
//     [1, 0, 0, 0, 0],
//     [0, 1, 0, 0, 3],
//     [0, 0, 1, 0, 0],
//     [1, 1, 2, 5, 3],
//     [1, 1, 2, 0, 0],
//     [1, 1, 0, 0, 0]
// ];

var matrix = [];
var grassArr = [];
var grassEaterArr = [];
var PredatorArr = [];
var MostOfAllArr = [];
var MenArr = [];

var side = 15;
var n = 55;
var m = 60;


function setup() {
    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (x = 0; x < m; x++) {
            matrix[y][x] = Math.round(random(0.5, 5));
            console.log(matrix[y][x]);
        }
    }
    frameRate(17);

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var grass = new Grass(x, y, 1);
                grassArr.push(grass);
            }
            else if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y, 2);
                grassEaterArr.push(grassEater);
            }
            else if (matrix[y][x] == 3) {
                var predator = new Predator(x, y, 3);
                PredatorArr.push(predator)
            }
            else if (matrix[y][x] == 4) {
                var mostOfAll = new MostOfAll(x, y, 4);
                MostOfAllArr.push(mostOfAll)
            }
            else if (matrix[y][x] == 5) {
                var men = new Men(x, y, 5);
                MenArr.push(men);
            }

        }
    }
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


}


function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            if (matrix[y][x] == 5) {
                fill('#FAEBD7')
            }
            rect(x * side, y * side, side, side);

        }


    }

    for (var i in grassArr) {
        grassArr[i].mul();

    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].mul();
        grassEaterArr[i].move();
        grassEaterArr[i].eat();
        grassEaterArr[i].die();
    }
    for (var i in PredatorArr) {
        PredatorArr[i].mul();
        PredatorArr[i].move();
        PredatorArr[i].eat();
        PredatorArr[i].die();
    }
    for (var i in MostOfAllArr) {
        MostOfAllArr[i].mul();
        MostOfAllArr[i].move();
        MostOfAllArr[i].eat();
        MostOfAllArr[i].die();
    }
    for (var i in MenArr) {
        MenArr[i].mul();
        MenArr[i].Walking();
        MenArr[i].eat();
        MenArr[i].die();
    }
}

