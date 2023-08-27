class Lens {
    constructor(x, y, radius, height, type) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.radius = Math.sign(radius)*Math.max(Math.abs(radius),this.height/2);
        this.type=type;
        if (this.type=='concave') {
            this.center = this.x - this.radius;
        }
        else {
            this.center = this.x - Math.sign(this.radius)*Math.sqrt(this.radius**2 - ((this.height/2)**2));
        }
        this.angle = Math.asin((this.height/2) / Math.abs(this.radius));
    }

    // Method to calculate the focal length of the lens
    drawLens(ctx) {
        ctx.beginPath();
        if (this.radius>0) {
            ctx.arc(this.center, this.y, this.radius, -this.angle, this.angle);
        }
        else {
            ctx.arc(this.center, this.y, Math.abs(this.radius), Math.PI -this.angle, Math.PI+this.angle);
        }
        if(this.type=='concave') {
            const diff = this.radius - Math.sign(this.radius)*Math.sqrt(this.radius**2 - ((this.height/2)**2));
            ctx.lineTo(this.x, this.y+Math.sign(this.radius)*(this.height/2));
            ctx.lineTo(this.x, this.y-Math.sign(this.radius)*(this.height/2));
            ctx.lineTo(this.x - Math.sign(this.radius)*(diff), this.y-Math.sign(this.radius)*(this.height/2));
            ctx.stroke();
            ctx.fill();
        }
        else {
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
        }

    }
}
