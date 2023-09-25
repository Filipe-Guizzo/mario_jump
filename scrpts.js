var mario = document.getElementById("mario");
var pipe = document.getElementById("pipe");
var clouds = document.getElementById("clouds");
var grass = document.getElementById("grass");
var btn = document.getElementById("btn-start");
var gameOver = document.getElementById("game-over");
var counter = document.getElementById("counter");
var points = 0;
var counterPoints = null;

const pipeAnimation = "to-move 5s linear infinite";
const cloudsAnimation = "to-move 4s linear infinite";
const grassAnimation = "to-move 6s linear infinite";

btn.addEventListener("click", ()=>{
    mario.classList.remove("dead");
    mario.classList.add("run");
    mario.style.top = null;
    mario.style.bottom = "90px";
    pipe.style.animation = pipeAnimation;
    clouds.style.animation = cloudsAnimation;
    grass.style.animation = grassAnimation;
    btn.blur();
    gameOver.style.visibility = 'hidden';
    points = 0;
    counter.innerHTML = `SCORE: ${points}`;
    counterPoints = setInterval(()=>{
        points++;
        counter.innerHTML = `SCORE: ${points}`;
    }, 1000)
})

const game =  setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = mario.offsetTop;
    const cloudsPosition = clouds.offsetLeft;
    const grassPosition = grass.offsetLeft;
    
    if((pipePosition <= 290 && pipePosition >= 130) && (marioPosition >= 230)){
        pipe.style.animation = null;
        pipe.style.left = `${pipePosition}px`;
        mario.classList.remove("jump");
        mario.classList.remove("run");
        mario.classList.add("dead");
        mario.style.top = `${marioPosition}px`;
        clouds.style.animation = null;
        clouds.style.left = `${cloudsPosition}px`;
        grass.style.animation = null;
        grass.style.left = `${grassPosition}px`;
        clearInterval(counterPoints);
        gameOver.style.visibility = 'visible';
    }
}, 10)

const jump = ()=>{
    mario.classList.add("jump");
    setTimeout(
        ()=>{
            mario.classList.remove("jump");
        }, 1000)
}

window.addEventListener("keydown", (event)=>{
    if(event.code == "Space"){
        jump();
    }
})