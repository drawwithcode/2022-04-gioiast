const urlString = window.location.href;
let url = new URL(urlString);

let myImage1;
let myImage2;

function preload() {
	myImage1 = loadImage("./libraries/assets/spray.png");
	myImage2 = loadImage("./libraries/assets/heart.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#000000');
	tint(255, 255, 255, 200);
	image(myImage1, 0, 0, 1920, 1080);

    fill(0);
	stroke(255);
	strokeWeight(4);
	rectMode(CENTER);
	rect(windowWidth/2, windowHeight/2, 320, 180)
	textAlign(CENTER);
	noStroke();
	textFont("Montserrat");
	textStyle(BOLD);
	textSize(64);
	fill(255);
	text('SPRAY!', windowWidth/2, windowHeight/2-10);
	textStyle(NORMAL);
	textSize(18);
    text('Drag, click, rotate your phone', windowWidth/2, windowHeight/2+30);
	text('Have fun!',windowWidth/2, windowHeight/2+50);
  }
  
function mouseClicked() {
	window.open(url + "page.html?count=" + frameCount, "_self");
}