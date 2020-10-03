class DustbinPart{

	constructor(x,y,width,height){
		var binOpt = {isStatic:true,restitution:0.3,friction:0.5,density:1.2}
		rectMode(CENTER);
		this.body = Bodies.rectangle(x,y,width,height,binOpt);
		this.width = width;
		this.height = height;
		World.add(world,this.body);
		this.pos = this.body.position;
	}

	display(){
		var angle = this.body.angle;
		push();
		translate(this.pos.x,this.pos.y);
		rotate(angle);
		pop();
	}
}