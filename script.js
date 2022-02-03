let canvas = document.getElementById('snake');
let context = canvas.getContext("2d");
let box = 32;

criarBG  = () => {
    context.fillStyle = 'Lightgreen';
    context.fillRect(0, 0, 16 * box, 16 * box);//posição de x e y && largura e altura
}

criarBG();