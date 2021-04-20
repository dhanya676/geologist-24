class Hammer {
constructor(x,y,width,hieght){
var options ={
    'density' : 2,
'friction' : 1.0,
'restitution' : 0.5
}
this.body = bodies.rectangle(x,y,widht,hieght,options);
this.widht = width;
this.hieght = height;

world.add(world,this.body);

}
display(){
  var pos = this.body.position;
  var angle = this.body.position;
  push();
  translate(pos.x,pos,y);
  rotate(angle);
  rectMode(CENTRE);
strokeWeight(4);
stroke("black");
fill("black");
rect(0,0,this,widht,this.hieght);
pop();
}



}















