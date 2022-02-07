Dicas = () =>{
    alert("Para jogar utilize as teclas direcionais do seu teclado, Se a cobrinha se chocar você perde! Divirta-se ")
}

let canvas = document.getElementById('snake');
let context = canvas.getContext("2d");
let score = document.getElementById('score-p');
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 - 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

criarBG  = () => {
    context.fillStyle = '#8a8a9475';
    context.fillRect(0, 0, 16 * box, 16 * box);//posição de x e y && largura e altura
}

criarCobrinha = () => {
    for(i = 0; i < snake.length; i++){
        context.fillStyle = 'red';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
drawFood = () => {
    context.fillStyle = 'white';
    context.fillRect(food.x, food.y, box , box);
}

document.addEventListener('keydown', update);

function update (event) {
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';  
}


iniciarJogo = () => {

    if(snake[0].x > 15 * box && direction == 'right') snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == 'down' ) snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up')snake[0].y = 16 * box;

    /*Condições se a cobrinha se chocar*/
    for(i = 1; i < snake.length; i++ ){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert("Game Over :( ")
        }
    }
    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == 'right') snakeX += box;
    if(direction == 'left') snakeX -= box;
    if(direction == 'up') snakeY -= box;
    if(direction == 'down') snakeY += box;
    
    /*condições pra cobrinha comer */

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }


    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo,100);

