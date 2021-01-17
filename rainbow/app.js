import {
    Ball
} from './ball.js';

import {
    BallGroup
} from "./ballgroup.js";

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas); //캔버스를 body의 자식 요소로 집어 넣음
      
      /* 
        setTimeout(function(){
            let container = document.body;
            let newImgWindow = document.createElement('div');
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
    
            clearInterval(newImgWindow);
    
        }, 1000);
     */
     
 
          

        addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        addEventListener("mousedown", this.mousedown.bind(this), false);
        this.mousedown(event);

        addEventListener("mouseup", this.mouseup.bind(this), false);
        this.mouseup(event);
        
        addEventListener("mousemove", this.mouseover.bind(this), false);
        this.mouseover(event);

        this.ballGroup = new BallGroup(this.stageWidth, this.stageHeight);

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight *2;
        this.ctx.scale(2,2);
    }

    mousedown(event) {
        this.mouse = {
            x: undefined,
            y: undefined
        };
        this.mouse.x = event.x;
        this.mouse.y = event.y;
    }

    mouseup(event) {
        this.mouse.x = 0;
        this.mouse.y = 0;
    }

    mouseover(event) {
        this.mouse = {
            x: undefined,
            y: undefined
        };
        this.mouse.x = event.x;
        this.mouse.y = event.y;
       //console.log(this.mouse);
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0,0, this.stageWidth, this.stageHeight); //이걸 해줘야 공 잔상이 안남음

        this.ballGroup.draw(this.ctx, this.stageWidth, this.stageHeight);
        this.ballGroup.bounceClick(this.mouse);
    }
}

window.onload = () => {
    new App();
};