export default class Player 
{

    constructor(x, y, bulletController)
    {
        this.x = x,
        this.y = y,
        this.bulletController = bulletController,
        this.width = 30,
        this.height = 42,
        this.speed = 10,
        this.radius = 42

        document.addEventListener("keydown", this.keydown);
        document.addEventListener("keyup", this.keyup);
        document.onmousedown = (e) =>
        {
         this.shootPressed = true;   
        };

        document.onmouseup = (e) =>
        {
            this.shootPressed = false;
        };
      
    }
       

    draw(ctx)
    {
        this.move();
        this.shoot();
    }

    shoot() {
        if (this.shootPressed) {
            console.log("shoot");
          const speed = 15;
          const delay = 7;
          const damage = 1;
          const bulletX = this.x + this.width / 2;
          const bulletY = this.y;
          this.bulletController.shoot(bulletX, bulletY, speed, damage, delay);
        }
      }

    move()
    {

        if(this.downPressed && this.y < 600)
        {
            this.y += this.speed;
        }

        if(this.upPressed && this.y > 50)
        {
            this.y -= this.speed;
        }

        if(this.leftPressed && this.x >50)
        {
            this.x -= this.speed;
        }

        
        if(this.rightPressed && this.x< 1400)
        {
            this.x += this.speed;
        }



    }

    keydown = (e) =>
    {
        if(e.code === "ArrowUp")
        {
            this.upPressed = true;
        }
        
        if(e.code === "ArrowDown")
        {
            this.downPressed = true;
        } 
        if(e.code === "ArrowLeft")
        {
            this.leftPressed = true;
        } 
        if(e.code === "ArrowRight")
        {
            this.rightPressed = true;
        } 

    };

    keyup = (e) =>
    {
        if(e.code === "ArrowUp")
        {
            this.upPressed = false;
        }
        
        if(e.code === "ArrowDown")
        {
            this.downPressed = false;
        } 
        if(e.code === "ArrowLeft")
        {
            this.leftPressed = false;
        } 
        if(e.code === "ArrowRight")
        {
            this.rightPressed = false;
        } 

    };

    mouseDown = (e) => 
    {
        this.shootPressed = true;

    }

    mouseUp = (e) => 
    {
        this.shootPressed = false;

    }

    collideWith(thing)
    {
        if (
            this.x < thing.x + thing.width &&
            this.x + this.width > thing.x &&
            this.y < thing.y + thing.height &&
            this.y + this.height > thing.y
          ) {
            return true;
          }
          return false;
        }



}

