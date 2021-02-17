class Penguin{
    constructor(x,y){
         var options={
            'isStatic':false,
             'restitution':0.3,
             'friction': 0.5,
             'density':0.45
         } 
         this.x=x;
         this.y=y;
         this.r=20
         this.body=Bodies.circle(x,y, 30, options)
         this.image = loadImage("pen.png")
         World.add(world,this.body)
      
     }
     display(){
        var penpos = this.body.position
       
        push();
        translate(penpos.x,penpos.y)
        imageMode(CENTER);
	    ellipseMode(CENTER);
	    image(this.image, 0,0,70,80)
         pop();

     }


}