class SlingShot {
    
    
    constructor(bodyA,pointB) {


        var option={
            bodyA :bodyA,
            pointB : pointB,
            length : 10,
            stiffness : 0.05


            
        }
    
        this.sling= Constraint.create(option);
        
        World.add(world,this.sling);
        this.pointB = pointB;

        

    }

    fly(){
        
        this.sling.bodyA = null;

    }


    display(){

        if(this.sling.bodyA){
            var A= this.sling.bodyA.position;
            var B = this.pointB

            strokeWeight(4)

            line(A.x,A.y,B.x,B.y)
        }

    }
}