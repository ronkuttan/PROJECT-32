class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.08,
            length: 10
        }
        this.sling1 = loadImage("sling1.png");
        this.sling2 = loadImage('sling2.png')
        this.sling3 = loadImage("sling3.png");
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
        
    }
    attach(body){
        this.sling.bodyA = body
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 120,437);
        image(this.sling2, 91,432)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            stroke(48,22,8);
            
            if(pointA.x < 220){
                image(this.sling3, pointA.x-30,pointA.y-10,15,30);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);
            }else{
                image(this.sling3, pointA.x+25,pointA.y-10,15,30);
                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x+30, pointB.y);
            }
           
            pop();
            
        }
    }
    
}