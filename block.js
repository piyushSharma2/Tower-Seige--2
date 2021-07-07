class Block{
    constructor(x,y,width,height){

        var Options={
            restitution:0.8,
            friction:1.0,
            density:1.0
        }

        this.body=Bodies.rectangle(x,y,width,height,Options)
        this.width=width;
        this.height=height;
        World.add(world,this.body)
        this.visiblity=255;
    }

    display(){

        if(this.body.speed<8){

        

        push()
        translate(this.body.position.x,this.body.position.y)
        angleMode(RADIANS)
        rotate(this.body.angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()

        }
        else{World.remove(world,this.body)
            push()
            this.visiblity=this.visiblity-5
            tint(255,this.visiblity)
            rectMode(CENTER)
            rect(0,0,this.width,this.height)
            pop()
        }

    }
}