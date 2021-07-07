class Base{
    constructor(x,y,width,height){
        var Options={
            isStatic:true
        }

        this.base=Bodies.rectangle(x,y,width,height,Options)
        this.width=width;
        this.height=height;
        World.add(world,this.base)

    }
    display(){
        push()
        translate(this.base.position.x,this.base.position.y)
        angleMode(RADIANS)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}