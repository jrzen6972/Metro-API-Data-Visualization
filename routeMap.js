// apiKey = 'bce8f914a243405e80a73d82e0de2d2b'
// pathUrl = 'https://api.wmata.com/Rail.svc/json/jPath?FromStationCode=N06&ToStationCode=G05?api_key=' + apiKey

pathUrl = 'https://developer.wmata.com/docs/services/5476364f031f590f38092507/export?DocumentFormat=Swagger'

let counter;

function preload() {
	stationData = loadJSON(pathUrl)
	
	// Fonts, come back later
	// HNB = loadFont("HelveticaNeue Bold.ttf")
	// HNM = loadFont("HelveticaNeue Medium.ttf")
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
	routeMap = 	stationData['MetroPathItem'];
	
	// Shows the two-letter abbreviation for the line (e.g.: RD, BL, YL, OR, GR, or SV) this station's platform is on.
	lineCode = stationData['MetroPathItem'].LineCode 
	
	// Full name for this station, as shown on the WMATA website.
	stationName1 = stationData[3]['MetroPathItem'].StationName
	stationName2 = stationData[4]['MetroPathItem'].StationName
	
	distancePrev = stationData['MetroPathItem'].DistanceToPrev
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