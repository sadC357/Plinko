class Particle {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.4,
      }
      this.radius=radius;
      this.body = Bodies.circle(x, y, radius, options);
      this.color=color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      ellipseMode(RADIUS);
      translate(pos.x,pos.y);
      rotate(angle); 
      fill(this.color);
      ellipse(0, 0, 10, 10);
      pop();
    }
}