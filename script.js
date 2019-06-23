
function setup() {
    guyn = "#006600";
    var socket = io();

    var side = 20;
    matrix = [];
    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let GishatichCountElement = document.getElementById('gishatichcounter');
    let bnapahpanCountElement = document.getElementById('buys');
    let kendanapahpanCountElement = document.getElementById('kendani');
    let balansaCountElement = document.getElementById('balans');
    let guyner = document.getElementById('guyner');

    socket.on("data", drawCreatures);
    function drawCreatures(data) {
        //! after getting data pass it to matrix variable

        matrix = data.matrix;
        grassCountElement.innerText = data.grassCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        GishatichCountElement.innerText = data.gishatichcounter;
        bnapahpanCountElement.innerText = data.bnapahpanhashiv;
        kendanapahpanCountElement.innerText = data.kendanapahpanhashiv;
        balansaCountElement.innerText = data.balansapahpanhashiv;
        //! Every time it creates new Canvas woth new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        

        //! clearing background by setting it to new grey color
        // background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill(guyn);
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("yellow");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill('brown');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill('white');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) {
                    fill('blue');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 6) {
                    fill('#ff3333');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 7) {
                    fill('#cc0000');
                    rect(j * side, i * side, side, side);
                }
           
    
   

    // var doc = document.getElementById("background");
    if (data.count < 10 ) {
        guyner.innerText = "Spring"
        document.body.style.backgroundColor = "#006600";
        if (matrix[i][j] == 1) {
            fill("#006600");
            rect(j * side, i * side, side, side);
        }
       
    }
    if (data.count >=10 && data.count<20) {
        guyner.innerText = "Summer"
        
        document.body.style.backgroundColor = "#009933";
        if (matrix[i][j] == 1) {
            fill("#009933");
            rect(j * side, i * side, side, side);
        }
    }
    if (data.count >=20  && data.count<30) {
        guyner.innerText = "Autumn"
        
       document.body.style.backgroundColor = "#cc9900";

        if (matrix[i][j] == 1) {
            fill("#cc9900");
            rect(j * side, i * side, side, side);
        }
    }
    if (data.count >= 30 && data.count<40) {
        guyner.innerText = "Winter"
     
         document.body.style.backgroundColor = "#ffffcc";
        if (matrix[i][j] == 1) {
            fill("#ffffcc");
        }
        rect(j * side, i * side, side, side);
    }
    if(data.count>40){
        count=0;
    }
    //! Getting DOM objects (HTML elements)
    


    //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 

    // clickme.addEventListener('click',function(){
    //     alert('dggdd')
    // })

    }
}
}

}
