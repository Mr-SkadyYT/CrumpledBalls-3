class DustBin {
    constructor(x, y, width, height) {
        var options={
            isStatic:true,
            friction:0.5,
            density:1.2,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.dustbingreenimg = loadImage("dustbingreen.png");
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.dustbingreenImg,0, 0, this.width, this.height);
        pop();
    }
}
