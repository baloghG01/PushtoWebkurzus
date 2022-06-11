import {gameLoop} from './Pixi2';

let button = document.querySelector('button');
button.onclick = () => 
{
    setInterval(gameLoop, 1000/60);
    button.style.display = "none";

};