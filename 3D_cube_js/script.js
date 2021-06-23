const COLOR_BG = "black";
const COLOR_CUBE = "yellow";
const SPEED_X = "0.05";
const SPEED_Y = "0.15";
const SPEED_Z = "0.10";
const POINT3D = function (x,y,z){
this.x = x;
this.y = y;
this.z = z;
}

// set up canvas & context 
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

//dimensions
var h = document.documentElement.clientHeight;
var w = document.documentElement.clientWidth;

canvas.height = h;
canvas.width = w;