//etch sketch code
const canvas = document.querySelector('#myCanvas')
const ctx = canvas.getContext('2d')
const etchSketch = document.querySelector('#etch-sketch')
const etchImg = document.querySelector('#etchImg')
const build = document.querySelector('#build')
const close = document.querySelector('#close')
let x = 0;
let y = 0;
window.addEventListener("keydown", moveSomething, false);
window.addEventListener("resize", init, false);
build.addEventListener("click", openCanvas, false);
close.addEventListener("click", closeCanvas, false);
etchSketch.addEventListener("touchstart", touched, false);
etchSketch.addEventListener("touchmove", handleMove, false);

function handleMove(event) {
    console.log(event.touches[0])
    x = event.touches[0].clientX;
    y = event.touches[0].clientY;
    let domx = event.touches[0].target.x;
    let domy = event.touches[0].target.y;
    moveCtx((x - domx), (y - domy));
}

function init() {
    fitToContainer(canvas);    
    reset();
};

//reset canvas
function reset() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x = etchSketch.offsetWidth / 2;
    y = (etchSketch.offsetHeight / 4) * 3;
};

//set canvas to div automat
function fitToContainer(canvas){
    etchSketch.style.transitionDuration = "0s";
    canvas.width  = etchSketch.offsetWidth;
    canvas.height = etchSketch.offsetHeight;
};

//moves ctx on key press
function moveCtx(x, y) {
    ctx.fillRect(x, y, 4, 4);
};

//on certain key press ctx moves
function moveSomething(e) {
    switch(e.keyCode) {
        case 37: //left
            x -= 4;
            moveCtx(x, y);
            break;
        case 38: //up
            y -= 4;
            moveCtx(x, y);            
            break;
        case 39: //right
            x += 4;
            moveCtx(x, y);            
            break;
        case 40: //down
            y += 4;
            moveCtx(x, y);            
            break;  
    }   
};

function openCanvas() {
    etchSketch.style.display = 'grid';
    init();
    etchSketch.style.transitionDuration = "0.5s";    
    etchSketch.style.top = '10%';
}

function closeCanvas() {
    init();
    etchSketch.style.transitionDuration = "0.5s"; 
    etchSketch.style.top = '120%';
    setTimeout(()=> {
        etchSketch.style.display = 'none';
    }, 500)
}
