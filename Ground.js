class Ground {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,800,10,options);
      this.width = 1900;
      this.height = 10;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };