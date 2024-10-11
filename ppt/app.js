const images = document.querySelectorAll('.images img');
const imgUser = document.querySelector('#choiceuser');
const imgCompu = document.querySelector('#choicecompu');
const h2Result = document.querySelector('h2');

const choices = ['piedra', 'papel', 'tijeras'];

const getChoiceUser = (e) => {
    const image = e.target;
    const choiceUser = image.getAttribute('data-id'); 
    const imageUser = image.src;
    // Pintar la imagen 
    imgUser.src = imageUser;
    // Llamar a la función play 
    play(choiceUser);
}

const play = (choiceUser) => {
    const choiceCompu = choices[Math.floor(Math.random() * 3)];
    
    imgCompu.src = `./${choiceCompu}.png`;

    let message = '';
    if(choiceUser === choiceCompu){
        message = 'Empate! 0_0';
    } else if (choiceUser === 'piedra' && choiceCompu === 'tijeras' ||
        choiceUser === 'papel' && choiceCompu === 'piedra' ||
        choiceUser === 'tijeras' && choiceCompu === 'papel'){
            message = 'Ganaste!😊';
        }else {
            message = 'Perdiste😒';
        }

    h2Result.innerText = message;
}


images.forEach(image => image.addEventListener('click', getChoiceUser));
