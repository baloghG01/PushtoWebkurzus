export default class Bullets 
{
    constructor(x, y,speed, damage) 
    {
        this.x = x,
        this.y = y,
        this.speed = speed,
        this.damage = damage
        this.width = 10,
        this.height = 10,
        this.color = "red"
 
    }

    draw(ctx)
    {
        ctx.fillStyle = this.color;
        this.y -= this.speed;
        ctx.fillRect(this.x, this.y, this.width, this.height);

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