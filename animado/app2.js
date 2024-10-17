const lienzo = document.querySelector('#lienzo')
const ctx = lienzo.getContext('2d')

let radio = 1;
let sentido = true;

setInterval(()=>{
    //ctx.clearRect(0,0, 600, 400);
    ctx.beginPath();
    ctx.arc(300, 200, radio, 0 ,Math.PI * 2);
    ctx.fillStyle = `hsl(${radio + 150}, 50%, 60%)`;
    ctx.fill();
   
    if(sentido){
        radio ++;
        if(radio > 600 /2){
            sentido = false;
        } }else{
            radio--;
            if(radio < 1){
                sentido = true;
            }
        }
}, 10);