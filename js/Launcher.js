class Launcher
{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }
    attach(body){
        this.launch.bodyA = body
    }
    fly(){
        this.launch.bodyA = null
    }

    display(){
        if(this.launch.bodyA){
            var pointA = this.launch.bodyA.position;
            var pointB = this.launch.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }

    }
    
}