//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;
var dogImage, dogHappy;

function preload()
{
	//load images here
  dog = loadImage(dogImg.png/image);
  happyDog = loadImage(dogImg1.png/image);
}

function setup() {
	createCanvas(500, 500);
  

  foodStock = database.ref('Food');
  foodStock.on("value, readStock");

  
  createSprite = dog(250, 250);
  dog.addImage = (dogImg.png/image)
}


function draw() {  

  drawSprites();
  //add styles here
  background(46, 139, 87);

  text("food remainig ", 500,50);
  

}

function readStock (data){
  foodS=data.val();
}

function writeStock(x){
   if(x<=0){
     x=0;
   }else{
     x=x-1;
   }
  database.ref('/'),update({
    food:x
  })
}

