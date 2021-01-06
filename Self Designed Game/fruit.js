class fruit{


    constructor(x, y, r, angle) {
        var options = {
            isStatic: false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.Visiblity=255
        this.body = Bodies.circle(x, y, r/2, options);
        this.r=r
        World.add(world, this.body);
        this.image = loadImage("sprites/banana.png")
      }
      display(){
          if (this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();}

    else if (gameState==2){
        World.remove(world, this.body)
     push();
     this.Visiblity = this.Visiblity - 20;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, this.r, this.r);
     pop();
        
   }
   
}
score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
      }

}