const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
let puntaje = 0;
let maxPuntaje = localStorage.getItem('maxPuntaje') || 0; 

document.getElementById('maxPuntaje').textContent = `Máximo Puntaje: ${maxPuntaje}`;

ctx.font = "20px serif";

const snake = [
    {
        x: 2,
        y: 1,
        show: function () {
            ctx.fillText('😮', this.x * 20, this.y * 20);
        }
    },
    {
        x: 1,
        y: 1,
        xSig: 2,
        ySig: 1,
        show: function () {
            ctx.fillText('😮', this.x * 20, this.y * 20);
        }
    },
    {
        x: 0,
        y: 1,
        xSig: 1,
        ySig: 1,
        show: function () {
            ctx.fillText('😮', this.x * 20, this.y * 20);
        }
    }
];



const food = {
    x: 0,
    y: 0,
    show: function () { ctx.fillText('🍰', this.x * 20, this.y * 20); },
    aparece: function () {
        this.x = Math.floor(Math.random() * 29);
        this.y = Math.floor(Math.random() * 19) + 1;
    }
};

function checkEat() {
    if (snake[0].x === food.x && snake[0].y === food.y) {
        food.aparece();
        snake.push({ ...snake[snake.length - 1] });
        puntaje++; 
        document.getElementById('puntaje').textContent = `Puntaje: ${puntaje}`;

        if (puntaje > maxPuntaje) {
            maxPuntaje = puntaje;
            localStorage.setItem('maxPuntaje', maxPuntaje); 
            document.getElementById('maxPuntaje').textContent = `Máximo Puntaje: ${maxPuntaje}`;
        }
    }
}

function nextMove(x, y) {
    snake.forEach((item, idx) => {
        if (idx === 0) {
            item.x = x;
            item.y = y;
        } else {
            item.x = item.xSig;
            item.y = item.ySig;
            item.xSig = snake[idx - 1].x;
            item.ySig = snake[idx - 1].y;
        }
    });
}

function checkCollision() {
    const head = snake[0];
    
    if (head.x < 0 || head.x > 29 || head.y < 1 || head.y > 20) {
        alert("¡Has perdido! Colisión con el borde.");
        resetGame();
    }

    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            alert("¡Has perdido! Colisión con tu propio cuerpo.");
            resetGame();
        }
    }
}

function resetGame() {
    puntaje = 0;
    direction = 1;
    x = 2; 
    y = 1;
    
    snake.length = 3;
    snake[0] = { x: 2, y: 1, show: function () { ctx.fillText('😮', this.x * 20, this.y * 20); }};
    snake[1] = { x: 1, y: 1, xSig: 2, ySig: 1, show: function () { ctx.fillText('😮', this.x * 20, this.y * 20); }};
    snake[2] = { x: 0, y: 1, xSig: 1, ySig: 1, show: function () { ctx.fillText('😮', this.x * 20, this.y * 20); }};
    
    food.aparece();
    document.getElementById('puntaje').textContent = `Puntaje: ${puntaje}`;
}

let direction = 1;
let x = 2;
let y = 1;

food.aparece();

setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    nextMove(x, y);
    snake.forEach(i => i.show());
    food.show();
    checkEat();
    checkCollision(); 

    if (direction === 1) x++;
    else if (direction === 2) y++;
    else if (direction === 3) x--;
    else y--;

}, 200);

document.querySelector('body').addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') direction = 1; 
    if (e.key === 'ArrowDown' ) direction = 2; 
    if (e.key === 'ArrowLeft' ) direction = 3; 
    if (e.key === 'ArrowUp') direction = 4; 
});
