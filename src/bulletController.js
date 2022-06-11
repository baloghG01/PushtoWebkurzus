import Bullets from "./Bullets.js";

export default class BulletController 
{
    bullets = [];
    nextBullet = 0;
    constructor(canvas)
    {
        this.canvas = canvas;
    }
    
    shoot(x, y, speed, damage, delay)
    {
        if(this.nextBullet <=0)
        {
            this.bullets.push(new Bullets(x,y,speed, damage));
            this.nextBullet = delay;
        }

        this.nextBullet--;
        
    }

    draw(ctx)
    {
        
        this.bullets.forEach((bullet) =>
        {
            if(this.BulletoutofScreen(bullet))
            {
                const index = this.bullets.indexOf(bullet)
                this.bullets.splice(index, 1);
            }
            bullet.draw(ctx);
        

        });
        
    }

    collideWith(thing)
    {
        return this.bullets.some(bullet =>
            {
                if(bullet.collideWith(thing))
                {
                    this.bullets.splice(this.bullets.indexOf(bullet), 1);
                    return true;
                }
                return false;
            })
    }

    BulletoutofScreen(bullet)
    {
        return bullet.y <= -bullet.height;
    }

}