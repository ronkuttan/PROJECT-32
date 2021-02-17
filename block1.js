class Block1 {
    constructor(x, y, height) {
      var options = {
          isStatic : false,
          'restitution':0.8,
          'friction':0.3,
          'density':0.8
      }
      this.body = Bodies.rectangle(x, y,27, height, options);
      this.width = 27;
      this.height = height;
      this.image = loadImage("Ice.png");
  
      this.Visiblity = 255;
    
      World.add(world, this.body);
    }
    display(){
      
      console.log(this.body.speed);
      if(this.body.speed < 4){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0,0,30,220)
        pop();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility);
        image(this.image, this.body.position.x, this.body.position.y, 27, 220);
        pop();
      }
    }
  };
  