const mario = document.querySelector('.mario');

const tubo = document.querySelector('.tubo');

const nuvem = document.querySelector('.nuvem');

const jump = ()=>{

mario.classList.add('pulo');

setTimeout(()=>{
mario.classList.remove('pulo');
}, 1100);
}

const loop = setInterval(()=>{

    const pipePosition = tubo.offsetLeft;
    const marioPosition = + window.getComputedStyle(mario).bottom.replace('px','');


if (pipePosition <= 100  && pipePosition > 0 && marioPosition < 60 ){

    tubo.style.animation = 'none';

    tubo.style.left = `${pipePosition}px`;

    tubo.style.animation = 'none';

        mario.src = 'image/gameOver.webp'  
        mario.style.width="120px";

        nuvem.style.animation = 'none';
clearInterval(loop)
}
}, 10)
document.addEventListener('click',jump);

