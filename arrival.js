const urlString = window.location.href;
let url = new URL(urlString);

var r = 255;
var g = 255;
var b = 255
var page = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#FF7F50');
	blendMode(NORMAL);
 }
  
function draw() {

	noStroke();
	fill(r, g, b);
	let size=random(2,40);
	for (i=0; i < 50; i++) {
		d = dist(pmouseX, pmouseY, mouseX, mouseY) * 0.7;
		let x = random(-d, d);
		let y = random(-d, d);
		ellipse(mouseX+x, mouseY+y, random(2, size));
		size*=0.7;
	}
}
    
function deviceTurned() {
	if (turnAxis === 'X'){
	  background('#98C1FB');
	}
	if (turnAxis === 'Y'){
	  background('#7B68EE');
	}
	if (turnAxis === 'Z'){
	  background('#98FB98');
	}
}

function touchStarted() {
	print(page);
	if(page === 3) {
		page=0;
	}
	page++;

	/*if(page === 1) {
	blendMode(LIGHTEST); 
	} else if (page === 2) {
		blendMode(NORMAL);
	} else if (page === 3) {
		blendMode(MULTIPLY);
	}*/
}
  
function touchMoved() {
	if(page === 1) {
		r = 255;
		g = random(0, 255);
		b = random(0, 255);
	} else if (page === 2) {
		r = random(0, 255)
		g = 255;
		b = random(0, 255);
	} else if (page === 3) {
		r = random(0, 255);
		g = random(0, 255);
		b = 255;
	}
  }
  // request permissions on iOS
function touchEnded(event) {
	if(DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
	  DeviceOrientationEvent.requestPermission()
	}
}