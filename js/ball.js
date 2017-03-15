function Ball( radius, color) {
	
	radius = radius ? radius : 40;
	color = color ? color : "#00ff00";
	
	this.x = 0;
	this.y = 0;
	this.vx = 0;
	this.vy = 0;
	this.radius = radius;
	this.rotation = 0;
	this.mass = 1;
	this.scaleX = 1;
	this.scaleY = 1;
	this.color = utils.parseColor(color);
	this.lineWidth = 1;
}

Ball.prototype.draw = function(ctx){
	ctx.save();
	ctx.translate( this.x, this.y);
	ctx.rotate( this.rotation);
	ctx.scale( this.scaleX, this.scaleY);
	ctx.lineWidth = this.lineWidth;
	ctx.fillStyle = this.color;
	ctx.strokeStyle = this.color;
	ctx.beginPath();
	ctx.arc( 0, 0, this.radius, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
}
