class animal {
  constructor(x, y, r, image){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0,
      isStatic: false
  }
  this.image = loadImage("sprites/animal1.png")
  this.image2 = loadImage("sprites/animal2.png")
  this.image3 = loadImage("sprites/animal3.png")

this.animal = image
  this.x=x
  this.y=y
  this.r=r
  this.body = Bodies.circle(x, y, r/2, options);
  World.add(world, this.body);

    this.Visiblity = 255;
  }

 display(){

    
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  imageMode(CENTER);

  if (this.animal==1){
    image(this.image, 0, 0, this.r, this.r)
  }
  else if (this.animal==2){
    image(this.image2, 0, 0, this.r, this.r)
  }

  else if (this.animal==3){
    image(this.image3, 0, 0, this.r, this.r)
  }
  
  pop();
  /*if (this.body.speed >4.5){
      gameState=3
  }*/
  //console.log(this.body.speed)
  }
   
  }

   
  

  
  



