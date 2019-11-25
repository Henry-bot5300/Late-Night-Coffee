var mugDrinkY = 210;
var mugDrinkH = 80;

var creamerY = 260;
var creamerH = 70;

var sugarcubes1Y = 250;
var sugarcubes2Y = 260;
var sugarcubes3Y = 250;

function setup() {
  // put setup code here
    createCanvas(500,500);
}

function draw() {
    background("#DB4C40");
   
    // Window
    fill('#A58B63');
    rect(370, 40, 100, 140, 5);
    
    // Night sky
    fill('#120D31');
    rect(380, 50, 80, 110, 5);
    
    // Stars
    fill('#F4E661');
    ellipse(390, 80, 5, 5);
    ellipse(400, 70, 5, 5);
    ellipse(420, 60, 5, 5);
    ellipse(410, 75, 5, 5);
    
    // Outside snow
    fill('#fff');
    rect(380, 140, 80, 30, 5);
    
    // Window bar
    fill('#A58B63');
    rect(380, 110, 80, 10, 5);

    // Table
    fill('#A58B63');
    rect(0 , 190, 580, 550, 5);
    
     // Plate
    fill('#9F9F92');
    ellipse(440,280,100,60);
        
    // Mug Handle
    fill('#fff');
    ellipse(320,250,70,80);
    
    // brown Ellipse
    fill('#A58B63');
    ellipse(305,250,70,70);

    // Mug 
    fill('#fff');
    rect(210, 200, 100, 100, 5);
    
    // Top of the coffee
    fill(135, 135, 135, 0);
    ellipse(260, 210, 90, 10);
    
    // Coffee
    fill(0, 0, 0, 160);
    rect(215,mugDrinkY,90,mugDrinkH,5);
    
    // Sugar Cubes
    fill('#fff');
    stroke('#0F0F0F');
    rect(420,sugarcubes1Y,20,20,5);
    fill('#fff');
    stroke('#0F0F0F');
    
    //2
    rect(430,sugarcubes2Y,20,20,5);
    fill('#fff');
    stroke('#0F0F0F');
    
    //3
    rect(450,sugarcubes3Y,20,20,5);
    
    //Sugar Text
    textSize(10);
    textFont("Georgia");
    textStyle(ITALIC);
    textAlign(CENTER);
    text(" press 1, 2, 3 for sugar",420,330);
     
    // Glass cup
    fill('#8BCEF2')
    rect(50,250,70,80,5);
    
    // Glass cup top
    fill('#8BCEF2');
    stroke('#0F0F0F');
    ellipse(85,260,70,10);
    
    // Creamer
    fill(255, 255, 255, 190);
    rect(50,creamerY,70,creamerH,5);
    
    // Creamer text
    textSize(10);
    textFont("Georgia");
    textStyle(ITALIC);
    textAlign(CENTER);
    text("C for cream, only if the coffee is empty",120,350);
}
function mousePressed(){
    mugDrinkH -= 10;    
    mugDrinkY += 10;

    if(mugDrinkY > 290) {
        mugDrinkY = 290;
    } 
    
    if (mugDrinkH < 0) {
        mugDrinkH = 0;
    }
}
function keyTyped() {
    if(key === "c") {

        if (mugDrinkH <= 0) {
            mugDrinkH = 80;
            mugDrinkY = 210;
            creamerH -= 10;
            creamerY += 10;
            
            if(creamerH < 0) {
                creamerH = 0;
                mugDrinkH = 0;
                mugDrinkY = 290;
            }
            
            if(creamerY > 330) {
                creamerY = 330;
            }
        }
    } 
    if(key === "1"){
        sugarcubes1Y =-1000;
    }

    if(key === "2"){    
        sugarcubes2Y =-1000;
    }

    if(key === "3"){    
        sugarcubes3Y =-1000;
    }
}