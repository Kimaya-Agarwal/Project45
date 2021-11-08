var bg, rocketImg, rocket, text1, t1Img
var rahul, arya, tezia, shazam;
var teziaImg;

function preload()
{
    bg = loadImage("images/background.jpg")
    rocketImg = loadImage("images/r1.png");
    teziaImg = loadImage("images/tezia.png");
   
}

function setup()
{
    createCanvas(windowWidth, windowHeight);
    rahul = createSprite(400,100,50,50)


    rocket = createSprite(300,200,10,10)
    rocket.addImage(rocketImg)
    rocket.scale = 0.8

    arya = createSprite(460,100,50,50)

    tezia = createSprite(540,300,50,50)
    tezia.addImage(teziaImg)
    tezia.scale = 0.3

    shazam = createSprite(600,100,50,50)

    
}

function draw()
{
    background(bg)

    
    


    drawSprites()
}