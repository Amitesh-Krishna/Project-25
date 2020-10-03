class DustbinImage{

	constructor(x,y,width,height){
		imageMode(CENTER);
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;
		this.image = loadImage("Sprites/dustbin.png");
	}

	display(){
		image(this.image,this.x,this.y,this.width,this.height);
	}
}