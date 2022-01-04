var bolinhadegorfe;
function setup() {
  createCanvas(400,400);
  bolinhadegorfe = createSprite( 200,200,100,100);

}

function draw() 
{
  background(30);
if (keyDown(UP_ARROW)){
  bolinhadegorfe.y=bolinhadegorfe.y -2;
}
if (keyDown(DOWN_ARROW)){
  bolinhadegorfe.y=bolinhadegorfe.y +2;
}
if (keyDown(LEFT_ARROW)){
  bolinhadegorfe.x=bolinhadegorfe.x -2;
}
if (keyDown(RIGHT_ARROW)){
  bolinhadegorfe.x=bolinhadegorfe.x +2;
}
if (keyDown("w")){
  bolinhadegorfe.y=bolinhadegorfe.y -2;
}
if (keyDown("s")){
  bolinhadegorfe.y=bolinhadegorfe.y +2;
}
if (keyDown("a")){
  bolinhadegorfe.x=bolinhadegorfe.x -2;
}
if (keyDown("d")){
  bolinhadegorfe.x=bolinhadegorfe.x +2;
}
  drawSprites();
}




