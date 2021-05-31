class Partical{
constructor(x,y,r){
var options ={
    restitution:0.4
}
this.r=r;

this.body = bodies.circle(x,y,this.r,options);
this.color = color(random(0,225), random(0,225), random(0,225));
World.add(world,this.body);

if(frameCount%60===0){
    Particales.push(new Partical(random(width/2-10,weidth2+10),10,10));
}

for (var j = 0; j< particales.length; j++) {
    particles[j].display();
}
for (var k = 0; k <divisions.length; K++){
    divisions[k].display();
}
}

display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    Push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill(this.colour);
    elliosemode(RADIOUS);
    elliose(0,0,this.r,this.r);
    pop();
}
}