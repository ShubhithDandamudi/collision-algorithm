var movingrectangle,fixedrectangle

function setup() {
  createCanvas(800,400);
 movingrectangle =  createSprite(400, 200, 50, 50);
 fixedrectangle = createSprite(200,200,50,50);
 movingrectangle.shapeColor = "red";
 fixedrectangle.shapeColor = "red";
}


function draw() {
  background("black"); 
  
 movingrectangle.x = World.mouseX;
 movingrectangle.y =World.mouseY; 

 if(movingrectangle.x - fixedrectangle.x < movingrectangle.width/2 + fixedrectangle.width/2 
    && fixedrectangle.x - movingrectangle.x < fixedrectangle.width/2 + movingrectangle.width/2
    && movingrectangle.y -  fixedrectangle.y < movingrectangle.height/2 + fixedrectangle.height/2
    && fixedrectangle.y - movingrectangle.y < fixedrectangle.height/2 + movingrectangle.height/2) {
    movingrectangle.shapeColor = "green";
    fixedrectangle.shapeColor = "green";
    }
   else {
   fixedrectangle.shapeColor = "red";
   movingrectangle.shapeColor = "red";

   }

  drawSprites();
} 