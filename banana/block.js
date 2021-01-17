export class Block {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.maxX = width + x; //공을 추적하기 위해서
        this.maxY = height + y;
    }

    draw(ctx) {
        const xGap = 80;
        const yGap = 50;

        ctx.fillStyle = '#b6846d';
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();

        ctx.strokeStyle = '#d3c9bb';
        ctx.beginPath();
        ctx.moveTo(this.maxX, this.maxY);
        ctx.lineTo(this.maxX-xGap, this.maxY-yGap);
        
        ctx.moveTo(this.maxX-xGap, this.maxY);
        ctx.lineTo(this.maxX-xGap*2, this.maxY-yGap);

        ctx.moveTo(this.maxX-xGap*2, this.maxY);
        ctx.lineTo(this.maxX-xGap*3, this.maxY-yGap);

        ctx.moveTo(this.maxX-xGap*3, this.maxY);
        ctx.lineTo(this.maxX-xGap*4, this.maxY-yGap);

        ctx.moveTo(this.maxX-xGap*4, this.maxY);
        ctx.lineTo(this.maxX-xGap*5, this.maxY-yGap);
        
        ctx.moveTo(this.maxX-xGap*5, this.maxY);
        ctx.lineTo(this.maxX-xGap*6, this.maxY-yGap);

        ctx.moveTo(this.maxX-xGap*6, this.maxY);
        ctx.lineTo(this.maxX-xGap*7, this.maxY-yGap);
        ctx.lineWidth = 10;
        ctx.stroke();
        

/* 
        ctx.fillStyle = '#190f3a';
        ctx.beginPath();
        ctx.moveTo(this.maxX, this.maxY);
        ctx.lineTo(this.maxX-xGap, this.maxY+yGap);
        ctx.lineTo(this.x-xGap, this.maxY+yGap);
        ctx.lineTo(this.x, this.maxY);
        ctx.fill();

        ctx.fillStyle = '#9d0919';
        ctx.beginPath();
        ctx.moveTo(this.x, this.maxY);
        ctx.lineTo(this.x-xGap, this.maxY+yGap);
        ctx.lineTo(this.x-xGap, this.maxY+yGap-this.height);
        ctx.lineTo(this.x, this.y);
        ctx.fill(); */
    }
}