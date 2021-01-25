class dustbin {
    constructor(xpos, ypos, width, height)
    {
       var options = {isStatic:true}
    this.body = Bodies.rectangle(xpos,ypos,width,height,options);
    World.add(world,this.body);
    
    this.width= width;
    this.height= height;
    }

   display()
   {
    push()
    rectMode(CENTER)
    fill("white")
    var position= this.body.position;
    rect(position.x,position.y,this.width,this.height)
    pop()
   }
}