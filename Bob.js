class Bob {
    constructor(x,y,radius) {
     
      var options = {
          isStatic:false,
          density:1.5,
          restitution:0.8
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      fill("pink");
      push()
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,this.radius,this.radius);
      pop()
    }
};