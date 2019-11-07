var lienzo = document.querySelector("#lienzo");
var ctx = lienzo.getContext("2d");
var frame = window.requestAnimationFrame;
var numero = 0; 
var animacion;
var ubicacionx = 0;
var ubicaciony = 0;

var spriteimage = new Image();
spriteimage.src = "img/images.jpg";

spriteimage.onload = function () {
    ctx.drawImage(spriteimage, 0, 0, 256, 256, 0, 256, 256, 256);
}

function tiempo() {
    var contadory = 0;

    if (numero >= 1024) { numero = 0 } else {numero+=256}

    for (var i = 0; i <= numero; i+=256) {

        if (numero>i) {
            ubicacionx=i;
        }
       
        ctx.clearRect(0,0,lienzo.with,lienzo.height);
        ctx.drawImage(spriteimage, numero,0, 256, 256, 0, 256, 256, 256);
        animacion= frame(tiempo)
    }
}
tiempo();

setTimeout(function () {
    cancelAnimationFrame(animacion);
},3000)
