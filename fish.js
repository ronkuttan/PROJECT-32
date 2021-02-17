class Fish {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 120, 130, options);
      this.width = 120;
      this.height = 130;
      this.image = loadImage("fish.png");

      this.Visibility = 255
      
      World.add(world, this.body);
    }
    display(){
        console.log(this.body.speed);
        if(this.body.speed < 2.55){
            var fishpos =this.body.position;
            var angle = this.body.angle;
            push();
            translate(fishpos.x, fishpos.y);
            rotate(angle);
            imageMode(CENTER);
            ellipseMode(CENTER);
            image(this.image, 0,0,130,150)
            pop();
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visibility = this.Visibility - 5;
          tint(255,this.Visibility);
          image(this.image, this.body.position.x, this.body.position.y, 120, 130);
          pop();
        }
        
      }
      score(){
        if(this.Visibility<0 && this.Visibility>-10 ){
       
          score=score+10
          
        }
    }
    };
   
     
     
     