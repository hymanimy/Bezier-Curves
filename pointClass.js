//Basic Class for constructing points which we can draw

function create(x,y){
    return new Point(x,y)
}

class Point{
    constructor(x,y){
        this.x = x
        this.y = y
    }

    draw(size = 5, colour = "Blue"){
        ctx.beginPath();
        ctx.rect(this.x, this.y, size, size)
        ctx.fillStyle = colour;
        ctx.fill();
        ctx.closePath();
    }

    line(other, colour = "White"){
        //Draws a line from one point to another
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(other.x, other.y)
        ctx.strokeWidth = 8;
        ctx.strokeStyle = colour;
        ctx.stroke();
        ctx.closePath()
    }

    linInterpolate(other1, other2){
        //apply to a point which we want to update by making a linear interpolation of 2 points
        this.x = (1-time)*other1.x + time*other2.x
        this.y = (1-time)*other1.y + time*other2.y
    }
}
