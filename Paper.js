class Paper{

	constructor(x,y,radius){

		var paperOpt = {isStatic:false,restitution:0.3,friction:0.5,density:1.2}
		imageMode(CENTER);
		this.body = Bodies.circle(x,y,radius,paperOpt);
		this.radius = radius;
		this.image = loadImage("Sprites/paper.png");
		World.add(world,this.body);
		this.pos = this.body.position;
	}

	display(){
		var angle = this.body.angle;
		push();
		translate(this.pos.x,this.pos.y);
		rotate(angle);
		image(this.image,0,0,this.radius*2+5,this.radius*2+12);
		pop();

	}
}