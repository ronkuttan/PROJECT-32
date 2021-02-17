class Ground {
    constructor(x, y, width, height) {
      var options = {
          isStatic : true,
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Ice.png");
  
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
	  ellipseMode(CENTER);
	  image(this.image, 0,0,1510,30)
      pop();
    }
  };
  