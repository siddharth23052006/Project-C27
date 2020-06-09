class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 200
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    
}