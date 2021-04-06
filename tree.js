class TreeClass{
    constructor(x,y,width,height){
    var options={    
  isStatic:true,
    restitutuion:0,
        friction:1,
        density:1.2
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height;
}
}