var bg ; 
var catImg1, catImg2, catImg3 , cat;
var mouseImg1, mouseImg2, mouseImg3, mouse;
var canvas

function preload() {
    //load the images here
    catImg1 = loadAnimation("images/cat1.png")
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png")
    catImg3 = loadAnimation("images/cat4.png")
    bg = loadImage("images/garden.png")
    mouseImg1 = loadAnimation("images/mouse1.png")
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg3 = loadAnimation("images/mouse4.png")
}

function setup(){
    canvas = createCanvas(1000,800);
    cat = createSprite(870,600);
    cat.addAnimation("catSleeping",catImg1)
    cat.scale = 0.2

    mouse = createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouseImg1)
    mouse.scale = 0.15



}

function draw() {

    background(bg);
  
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catLastImg",catImg3);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("catLastImg");
        mouse.addAnimation("mouseCaught",mouseImg3);
        mouse.scale = 0.15;
        mouse.changeAnimation("mouseCaught");
    }

    drawSprites();
}


function keyPressed(){
    if(keyCode === 32){
        cat.addAnimation("catRunning",catImg2)
        cat.velocityX = -5
        cat.changeAnimation("catRunning")
        mouse.addAnimation("mousePlaying",mouseImg2)
        mouse.scale = 0.15
        mouse.frameDelay = 25
        mouse.changeAnimation("mousePlaying")
    }
}
