apiKey = 'bce8f914a243405e80a73d82e0de2d2b'
pathUrl = 'https://api.wmata.com/Rail.svc/json/jPath?FromStationCode=N06&ToStationCode=G05&api_key=' + apiKey

// pathUrl = 'https://developer.wmata.com/docs/services/5476364f031f590f38092507/export?DocumentFormat=Swagger'

let counter;

function preload() {
	stationData = loadJSON(pathUrl)
	
	// Load Fonts
	HNB = loadFont("HelveticaNeue Bold.ttf")
	HNM = loadFont("HelveticaNeue Medium.ttf")
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	if(width<height){
		mobile = true
	}
	
  counter = new Count(0,100)
  counter.start();
}

function stationPaths() {
	routeMap = 	stationData['Path'];
	
	// Shows the two-letter abbreviation for the line (e.g.: RD, BL, YL, OR, GR, or SV) this station's platform is on.
	lineCode = stationData['Path'].LineCode 
	
	// Full name for this station, as shown on the WMATA website.
	stationName1 = stationData['Path'].StationName // Current issues: is undefined. perhaps need a [] between stationData and ['Path']
	stationName2 = stationData['Path'].StationName
	
	distancePrev = stationData['Path'].DistanceToPrev
}

function draw() {
	stationPaths()
	
  background(0);
  let middle = height/2;
  let sVal = counter.s;
  let Progress = map(sVal,0,100,0,width);
  
  fill(0,255,0);
  textSize(32);
  textFont('monospace')
  let txt = text('Distance between '+ stationName1 + ' and ' + stationName2 + ': '+ sVal + '%',0,middle-20);
  
  rect(0,middle,Progress,20,15)
  stroke(0,255,0)
  noFill();
  rect(0,middle,width,20,15)
  
  if (floor(random(300)) == 100) {
    counter.reset();
  }
  
}

class Count{
  constructor(s,w){
    this.s = s
    this.w = w
    this.p = createP('')
  }
  start(){
    if (!this.done) {
      setInterval(() => this.counter(),this.w)
    }
  }
  counter(){
    if(this.s < 100){
      this.s ++
      this.p.html(this.s)
    }
  }
  reset(){
    this.s = 0
  }
}

// The following code is inspired by this: https://editor.p5js.org/Poupas/sketches/IH-UuIUT

// let counter;
// function setup() {
//   createCanvas(400, 400);
//   counter = new Count(0,100)
//   counter.start();
// }

// function draw() {
//   background(0);
//   let middle = height/2;
//   let sVal = counter.s;
//   let Progress = map(sVal,0,100,0,width);
  
//   fill(0,255,0);
//   textSize(32);
//   textFont('monospace')
//   let txt = text('Progress : '+ sVal + '%',0,middle-20);
  
//   rect(0,middle,Progress,20,15)
//   stroke(0,255,0)
//   noFill();
//   rect(0,middle,width,20,15)
  
//   if (floor(random(300)) == 100) {
//     counter.reset();
//   }
  
// }

// class Count{
//   constructor(s,w){
//     this.s = s
//     this.w = w
//     this.p = createP('')
//   }
//   start(){
//     if (!this.done) {
//       setInterval(() => this.counter(),this.w)
//     }
//   }
//   counter(){
//     if(this.s < 100){
//       this.s ++
//       this.p.html(this.s)
//     }
//   }
//   reset(){
//     this.s = 0
//   }
// }


// Below is older code from somewhere else, probably won't use.

// int startTime; int counter; int maxTime; 
// boolean = done; 

// function setup() { //setup function called initially, only once 
// 	size(250, 250); background(255); 
	
// 	//set background white // colorMode(HSB); //set colors to Hue, Saturation, Brightness mode 
// 	counter = 0; startTime= millis(); maxTime=random(2000,8001); done=false;

// } 

// function draw() { //draw function loops 
// 	background(244); 
// 	if (counter[startTime] < maxTime) {
// 		counter=millis();
// 	}
	
// 	else {
// 		done=true;
// 	}
	
// 	fill(244,3,3);
// 	noStroke();
// 	rect(20,100,map(counter[startTime], 0, maxTime, 0, 200), 19);
// 	text(counter- startTime+" " + int(maxTime) +  " " + int (map(counter[startTime], 0, maxTime, 0, 200)), 20, 160);
// 	noFill();
// 	stroke(0);
// 	rect(20,100,200,19);
//  }

// function mousePressed () { if (done) { counter = 0; startTime= millis();

//  maxTime=random(2000,8001); done=false; } }