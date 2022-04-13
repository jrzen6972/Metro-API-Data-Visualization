// https://api.wmata.com/Rail.svc/json/jPath?FromStationCode=N06&ToStationCode=G05&api_key=bce8f914a243405e80a73d82e0de2d2b
apiKey = 'bce8f914a243405e80a73d82e0de2d2b'
pathUrl_RD = 'https://api.wmata.com/Rail.svc/json/jPath?FromStationCode=A15&ToStationCode=B11&api_key=' + apiKey
pathUrl_BL = 'https://api.wmata.com/Rail.svc/json/jPath?FromStationCode=J03&ToStationCode=G05&api_key=' + apiKey
pathUrl_YL = 'https://api.wmata.com/Rail.svc/json/jPath?FromStationCode=E10&ToStationCode=C15&api_key=' + apiKey
pathUrl_OR = 'https://api.wmata.com/Rail.svc/json/jPath?FromStationCode=K08&ToStationCode=D13&api_key=' + apiKey
pathUrl_GR = 'https://api.wmata.com/Rail.svc/json/jPath?FromStationCode=E10&ToStationCode=F11&api_key=' + apiKey
pathUrl_SV = 'https://api.wmata.com/Rail.svc/json/jPath?FromStationCode=N06&ToStationCode=G05&api_key=' + apiKey

stationURL = 'https://api.wmata.com/Rail.svc/json/jStations?api_key=' + apiKey

// The following code is inspired by this: https://editor.p5js.org/Poupas/sketches/IH-UuIUT

let counter; // Change to show live feed of train's pos.

function preload() {
	pathData = loadJSON(pathUrl_RD) // Set to Red Line
	stationData = loadJSON(stationURL)
}

function setup() {
	createCanvas(windowWidth/2, windowHeight/2);

	if(width<height){
		mobile = true
	}
	
	stations = stationData['StationName']
	
  counter = new Count(0,100)
  counter.start();
}

function stationPaths() {
	routeMap = 	pathData['Path'];
	
	// Shows the two-letter abbreviation for the line (e.g.: RD, BL, YL, OR, GR, or SV) this station's platform is on.
	lineCode = pathData['Path'][0].LineCode 
	
	// Full name (stationName) or code (stationCode) for this station, as shown on the WMATA website.
	// stationCode1 = pathData['Path'][0].StationCode
	// stationCode2 = pathData['Path'][27].StationCode
	stationName1 = pathData['Path'][0].StationName
	stationName2 = pathData['Path'][10].StationName
	
	distancePrev = pathData['Path'][10].DistanceToPrev // Future: calculate distance between two stations the user selects. 
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
	let info_text = text('Current Metro Line Selected: ' + lineCode, 0, middle-100);
  let distance_txt = text('Distance between '+ stationName1 + ' and ' + stationName2 + ': '+ distancePrev + ' feet.',0,middle-20); // See stationCode/stationName above in stationPaths()
  
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