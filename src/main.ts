import {greeter} from './greeter';

const m = document.getElementById('main');
m.innerHTML = greeter('Luc Claesen');

let canvas = document.getElementById("pong") as HTMLCanvasElement;
let context = canvas.getContext('2d');

context.fillStyle = '#000';
context.fillRect(0, 0, canvas.width, canvas.height);    