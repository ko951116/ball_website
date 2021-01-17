export class Ball {
    constructor(index, x, y, dy, radius, color) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
    }

    draw(ctx, stageWidth, stageHeight) {
        this.bounceWindow(stageWidth, stageHeight);

        ctx.beginPath();
        ctx.fillStyle = this.color;

        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fill();
    }

    /* ballGrow(mouse) {
        const maxRadius = 40;
        const minRadius = 4;

        if (Math.abs(mouse.x - this.x ) < 50 && Math.abs(mouse.y - this.y) < 50) {
            if (this.radius < maxRadius) {
                this.radius += 2;
            }
        } else if(this.radius > minRadius) {
            this.radius -= 2;
        }

    } */

    bounceWindow(stageWidth, stageHeight) { 
        //const minY = this.radius*5;
        const maxY = stageHeight - this.radius;
        const gravity = 2;
        const friction = 0.5;

        if (this.y + this.dy>= maxY) { //바닥에 닿으면.
            this.dy = -this.dy * friction; //dy방향 바꿔주고, 닿기 직전 공과의 차이/2 만큼 올려줌.
        } else {
            this.dy += gravity; //닿기 전까지는 dy계속 증가/ 튀길때는 dy가 -방향으로 계속 증가.
        }
        this.y += this.dy;
        //console.log(this.y);
    }

    bounceClick(mouse) {
        if (Math.abs(mouse.x - this.x) < 30 && Math.abs(mouse.y - this.y) < 30) {
            this.y -= (innerHeight*0.3)*Math.random();
        }
    }
}