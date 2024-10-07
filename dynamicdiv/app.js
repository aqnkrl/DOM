const container = document.querySelector('.container');
const anchoInput = document.querySelector('#ancho');
const altoInput = document.querySelector('#alto');
const sombraInput = document.querySelector('#sombra');
const radioInput = document.querySelector('#radio');


anchoInput.addEventListener('input', function() {
    container.style.width = `${anchoInput.value}%`;
});

altoInput.addEventListener('input', function() {
    container.style.height = `${altoInput.value}%`;
});

sombraInput.addEventListener('input', function() {
    container.style.boxShadow = `0px 0px ${sombraInput.value}% rgba(0, 0, 0, 0.5)`;
});

radioInput.addEventListener('input', function() {
    container.style.borderRadius = `${radioInput.value}%`;
});




