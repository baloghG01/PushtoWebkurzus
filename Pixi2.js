import Player from "./Player.js";
import BulletController from "./bulletController.js";

const canvas = document.getElementById("Game");
const ctx = canvas.getContext("2d");

canvas.width = 1500;
canvas.height = 700;

const backImage = new Image();
backImage.src = "resources/backround.jpg";

const spriteImage = new Image();
spriteImage.src = "resources/player.png";

const enemyImage = new Image();
enemyImage.src = "resources/enemy.png";

const NumberofEnemys = 10;
const EnemyArray = [];
let score = 0;
let lives = 10;

const bulletController = new BulletController(canvas);
const sprite = new Player(canvas.width/2, 600, bulletController);

class Enemy
{
    constructor() 
    {
        this.x = Math.random() * 1100,
        this.y = 50,
        this.width = 70,
        this.height = 60,
        this.radius = 70,
        this.counted = false
 
    }

    Update()
    {
        this.y++;
        if(this.y>700)
        {
            this.y = 0;
            lives--;
        }

        
    }

    draw()
    {
        ctx.drawImage(enemyImage, this.x, this.y, this.width, this.height);
    }

    
};
for(let i=0; i<NumberofEnemys; i++)
{
    EnemyArray.push(new Enemy());
}



function gameLoop()
{
    ctx.drawImage(backImage, 0, 0,canvas.width, canvas.height);
    ctx.drawImage(spriteImage, sprite.x, sprite.y, spriteImage.width, sprite.height);
    bulletController.draw(ctx);
    sprite.draw(ctx);
    EnemyArray.forEach(enemy => 
        {
            enemy.Update();
            enemy.draw();
            if(bulletController.collideWith(enemy))
            {
                const index = EnemyArray.indexOf(enemy);
                EnemyArray.splice(index, 1);
                score++;
                
            }
            if(sprite.collideWith(enemy))
            {
                const index = EnemyArray.indexOf(enemy);
                EnemyArray.splice(index, 1);
                score++;
                lives--;

            }


        })
    ctx.fillStyle = "white" ;   
    ctx.fillText("Score: " + score, 50, 50);
    ctx.fillText("Lives: " + lives, 100, 50);

    if(lives == 0)
    {
        alert("Game Over");
    }
   
   
}
setInterval(gameLoop, 1000/60);


