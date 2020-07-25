var dog,happyDog,database,foodS,foodStock;
function preload(){
    pog = loadImage("Dog.png");
    dogHappy = loadImage("happydog.png");
}

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    dog = createSprite(200,200,20,20);
    dog.addImage("nog",pog);
    foodStock = database.ref("food");
    foodStock.on("value",readStock);
   // feed=createButton("feed the dog");
   // feed.position(700,95);
   // feed.mousePressed(feedDog);

   // addFood=createButton("add Food");
   // addFood.position(800,95);
   // addFood.mousePressed(addFood);

}

function draw(){
    background("green");
   // display();
if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);

}
  // File(255,255,254);
  // textSize(15);
  // if(lastFed>=12){
  //     text("Last Feed : "+ lastFed%12 + "PM",350,30);
  // }else if(lasrFed==0){
  //     text("Last Feed : 12 AM",350,30);
  // }else{
  //     text("Last Feed : "+laseFed+"AM",350,30);
  // }
 
   
    drawSprites();
}


function readStock(data){
    foodS=data.val();
}
function writeStock(x){
  if(x<=0){
      x=0;
  }else{
      x=x-1;
  }

    database.ref('/').update({
            Food:x
       

    })
   
}