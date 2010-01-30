"use strict"; /*jslint white: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, strict: true, newcap: true, immed: true*/ /*global document*/
window.onload = function () {
    var ctx = document.getElementById('canvas').getContext('2d');
    
    function drawCircles() {
        //clear canvas/setup colors
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        document.body.style.background = document.config.bg.value;
        document.body.style.color = document.config.fg.value;
        ctx.fillStyle = document.config.fg.value;
        ctx.strokeStyle = document.config.fg.value;
        
        //outercircle
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(document.body.clientWidth / 2, document.body.clientHeight / 2, document.config.size.value / 2, 0, 2 * Math.PI, true);
        ctx.stroke();
        
        //inner circle
        ctx.globalAlpha = 0.5;
        ctx.beginPath(); 
        ctx.arc(document.body.clientWidth / 2, document.body.clientHeight / 2, (document.config.size.value * document.config.percent.value) / 200, 0, 2 * Math.PI, true);
        ctx.fill();
        
        //text
        ctx.globalAlpha = 0.25;
        ctx.font = document.config.size.value / 3 + 'px sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(Math.round(document.config.percent.value) + "%", document.body.clientWidth / 2 + document.config.size.value * 1.1, document.body.clientHeight / 2);
    }
    
    drawCircles();
    
    document.config.percent.onkeyup = drawCircles;
    document.config.size.onkeyup = drawCircles;
    document.config.fg.onkeyup = drawCircles;
    document.config.bg.onkeyup = drawCircles;
    document.config.onsubmit = function () { 
        return false; 
    };
};
