class Boy{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.boy = Constraint.create(options);
        World.add(world, this.boy);

    
        
    }

    attach(body){
        this.boy.bodyA = body;
     }

    fly(){
        this.boy.bodyA = null;
    }

    display(){
    if(this.boy.bodyA){
         line(this.boy.bodyA.position.x,this.boy.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
    }
    
}