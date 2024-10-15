const lienzo = document.querySelector("#lienzo");
const ctx = lienzo.getContext('2d');

// Telaraña
for (let i = 0; i < 12; i++) { 
    ctx.beginPath();
    ctx.moveTo(0, 0); 
    ctx.lineTo(100 * Math.cos((i * Math.PI) / 6), 100 * Math.sin((i * Math.PI) / 6)); 
    ctx.stroke();
}
const circleRadius = 19.5; 
const numberOfCircles = 5; 
for (let i = 1; i <= numberOfCircles; i++) {
    ctx.beginPath();
    ctx.arc(0, 0, i * circleRadius, 0, Math.PI * 2); 
    ctx.stroke();
}

// Primer fantasma
ctx.fillStyle = 'white'; 
ctx.beginPath();
ctx.arc(200, 200, 80, Math.PI, 0, false); 
ctx.lineTo(280, 320); 
ctx.quadraticCurveTo(250, 360, 220, 320); // Ondas 
ctx.quadraticCurveTo(200, 360, 180, 320);
ctx.quadraticCurveTo(150, 360, 120, 320); 
ctx.lineTo(120, 200); 
ctx.closePath();
ctx.fill();
ctx.stroke();

// Ojos
ctx.fillStyle = 'black'; 
ctx.beginPath();
ctx.arc(170, 180, 10, 0, Math.PI * 2, true); 
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.arc(230, 180, 10, 0, Math.PI * 2, true); 
ctx.fill();
ctx.stroke();

// Boca 
ctx.beginPath();
ctx.arc(200, 210, 20, 0, Math.PI, false); 
ctx.stroke();

// Círculos 
ctx.fillStyle = 'lightpink'; 
ctx.beginPath();
ctx.arc(160, 210, 8, 0, Math.PI * 2, true); 
ctx.fill();
    
ctx.beginPath();
ctx.arc(240, 210, 8, 0, Math.PI * 2, true); 
ctx.fill();


// Segundo fantasma
ctx.fillStyle = 'white'; 
ctx.beginPath();
ctx.arc(400, 200, 80, Math.PI, 0, false); 
ctx.lineTo(480, 320); 
ctx.quadraticCurveTo(450, 360, 420, 320); 
ctx.quadraticCurveTo(400, 360, 380, 320); 
ctx.quadraticCurveTo(350, 360, 320, 320); 
ctx.lineTo(320, 200); 
ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'black'; 
ctx.beginPath();
ctx.arc(370, 180, 10, 0, Math.PI * 2, true); 
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.arc(430, 180, 10, 0, Math.PI * 2, true); 
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(400, 210, 20, 0, Math.PI, false); 
ctx.stroke();

// Moño 
ctx.fillStyle = '#B3B3B3'; 
ctx.beginPath();
ctx.moveTo(400, 260); 
ctx.bezierCurveTo(370, 240, 370, 280, 400, 260); 
ctx.bezierCurveTo(430, 240, 430, 280, 400, 260); 
ctx.fill();
ctx.stroke();

// Corazón 
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.moveTo(300, 100); 
ctx.bezierCurveTo(250, 50, 200, 100, 300, 170);
ctx.bezierCurveTo(400, 100, 350, 50, 300, 100);
ctx.fill();

//Caramelo (intento)
ctx.beginPath();
ctx.arc(50, 250, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "orange";
ctx.fill();
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(30, 250);
ctx.lineTo(10, 230);
ctx.lineTo(10, 270);
ctx.closePath();
ctx.fillStyle = "purple";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(70, 250);
ctx.lineTo(90, 230);
ctx.lineTo(90, 270);
ctx.closePath();
ctx.fillStyle = "purple";
ctx.fill();
ctx.stroke();

