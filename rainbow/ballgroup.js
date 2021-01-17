import {
    Ball
} from "./ball.js";

export class BallGroup {
    constructor(stageWidth, stageHeight) {
        this.totalballs = 100;

        this.color = ['#f44228', '#da94b5', '#a7c3e0', '#f4e788'];
        //this.color = ['rgba(0,199,235,1)', 'rgba(0,146,199,1)', 'rgba(0,87,158,1)'];
        //this.color = ['rgba(255,0,0,1)', 'rgba(255,255,0,1)', 'rgba(0,255,255,1)'];

        this.balls = [];

        for (let i = 0; i < this.totalballs; i++) { //wave 생성
            const ball = new Ball(
                i,
                Math.random() * stageWidth,
                Math.random() * stageHeight,
                2,
                Math.random() * 50,
                this.color[i % 4],
            );
            this.balls[i] = ball;
        }
    }

    draw(ctx, stageWidth, stageHeight) {
        for (let i = 0; i < this.totalballs; i++) {
            const ball = this.balls[i];
            ball.draw(ctx, stageWidth, stageHeight);
        }
    }

    bounceClick(mouse) {
        for (let i = 0; i < this.totalballs; i++) {
            const ball = this.balls[i];
            ball.bounceClick(mouse);
        }
    }
}