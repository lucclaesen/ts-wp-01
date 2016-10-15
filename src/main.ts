import {greeter} from "./greeter";

const m = document.getElementById("main");
m.innerHTML = greeter("Luc Claesen");

// const canvas = document.getElementById("pong") as HTMLCanvasElement;
// const context = canvas.getContext("2d");

// // draw the black pane
// context.fillStyle = "#000";
// context.fillRect(0, 0, canvas.width, canvas.height);
