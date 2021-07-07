class Polygon{
    constructor(x,y){

        var Options={
            isStatic:false,
            restitution:0.8,
            friction:1.0,
            density:1.0
        }

        this.body=Bodies.circle(x,y,100,Options)
        this.radius=100;
        this.image=loadImage("polygon.png")
        World.add(world,this.body)
    }
    display(){
        
        push()
        translate(this.body.position.x,this.body.position.y)
        angleMode(RADIANS)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,100,100)
        pop()
        
    }
}