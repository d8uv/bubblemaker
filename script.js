"use strict"; /*jslint white: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, strict: true, newcap: true, immed: true*/ /*global window document Raphael*/
window.onload = function () {
    var paper = new Raphael("canvas");
    
    function drawCircles() {
        var outCircle, inCircle, text;
        paper.clear();
        document.body.style.background = document.config.bg.value;
        document.body.style.color = document.config.fg.value;
        
        outCircle = paper.circle(document.body.clientWidth / 2, document.body.clientHeight / 2, (document.config.size.value / 2));
        inCircle = paper.circle(document.body.clientWidth / 2, document.body.clientHeight / 2, (document.config.size.value * document.config.percent.value) / 200);
        text = paper.text(document.body.clientWidth / 2 + document.config.size.value * 0.8, document.body.clientHeight / 2, Math.round(document.config.percent.value) + "%");
        
        outCircle.attr({stroke: document.config.fg.value});
        inCircle.attr({opacity: 0.5, fill: document.config.fg.value, stroke: "none"});
        text.attr({fill: document.config.fg.value, opacity: 0.25, "font-size": document.config.size.value / 4});
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