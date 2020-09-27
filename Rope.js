class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.Rope=Matter.Constraint.create(options);
        World.add(world,this.Rope);
    }
    display(){
     var   pointA=this.Rope.bodyA.position;
     var   pointB=this.Rope.bodyB.position;
    strokeWeight(1);
    stroke(0);
     line(pointA.x,pointA.y-45,pointB.x+this.offsetX,pointB.y+this.offsetY);
    }
}