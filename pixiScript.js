const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = 700;
canvas.width = 1200;

const keys = [];
const isMousedown = false;

const player= 
{
    x: 600,
    y: 600,
    width : 32,
    height : 42,
    frameX : 0,
    frameY : 0,
    speed : 10,
};

const sprite = new Image();
sprite.src = "resources/player.png";

const backround = new Image();
backround.src = "resources/backround.jpg";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH)
{
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);

}

function animate()
{
    ctx.drawImage(backround, 0, 0, canvas.width, canvas.height);
    drawSprite(sprite, 0, 0, player.width, player.height, player.x, player.y, player.width, player.height )
    playerMove();
    requestAnimationFrame(animate);

}
animate();

window.addEventListener("keydown", function(e)
{
    keys[e.code] = true;
    console.log(e.code);

});

window.addEventListener("keyup", function(e)
{
    keys[e.code] = false;

});

document.onmousedown = (event) => {
    isMouseFlag = true;
};

document.onmouseup = (event) => {
    isMouseFlag = false;
};



function playerMove()
{
    if (keys['ArrowUp'] && player.y>50)
    {
        player.y -= player.speed;
    }

    if (keys['ArrowDown'] && player.y<600)
    {
        player.y += player.speed;
    }

    if (keys['ArrowLeft'] && player.x>50)
    {
        player.x -= player.speed;
    }

    if (keys['ArrowRight'] && player.x<1100)
    {
        player.x += player.speed;
    }


}