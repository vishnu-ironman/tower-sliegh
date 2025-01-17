class orangeBox {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0,
          'friction':1.5,
          'density':1.5,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("orange");
      stroke(0);
      strokeWeight(4);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  