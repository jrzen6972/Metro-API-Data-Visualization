
url = 'https://api.wmata.com/StationPrediction.svc/json/GetPrediction/A01?api_key=dc0b3a0b8ee54077aa4e71f03e600aef'
stationUrl = "https://api.wmata.com/Rail.svc/json/jStations?api_key=dc0b3a0b8ee54077aa4e71f03e600aef"


//let allTrains
let pieArray = []

//colors identical to WMATA
let lineColors = {
	'RD': [191, 13, 62],
	'BL': [0, 156, 222],
	'OR': [237, 139, 0],
	'SV': [145, 157, 157],
	'GR': [0, 177, 64],
	'YL': [255, 209, 0],
	'No': "gray"
}

//let locationDict = {}

function preload() {
	stationData = loadJSON(stationUrl)
	askWMATA()

	HNB = loadFont("fonts/HelveticaNeue Bold.ttf")
	HNM = loadFont("fonts/HelveticaNeue Medium.ttf")
}



function setup() {
	createCanvas(windowWidth, windowHeight);

	locationDict = createStringDict("sample", "e")
	locationDict.remove("sample")

	stations = stationData["Stations"]

	//print(stations)
	sel = createSelect();
	sel.style("background", "gray")
	sel.style("font-family", "Arial")
	sel.style("font-size", width / 46 + "px")
	sel.center()
	sel.style("text-align", "center")
  
	sel.size(width * 0.55, height * 0.059)
  if(width>height){
   	sel.position(width / 2 - sel.width / 2, height / 2 + sel.height * 2)
  }else{
    sel.position(width / 2 - sel.width / 2, height / 2 + (height/6) + sel.height * 2)
  }

	for (let i = 0; i < stations.length; i++) {
		if (stations[i].Name == "Metro Center" || stations[i].Name == "Gallery Pl-Chinatown" || stations[i].Name == "L'Enfant Plaza" || stations[i].Name == "Fort Totten") {
			locationDict.create(stations[i].Name + i, stations[i].Code)
			sel.option(stations[i].Name + i)
		} else {
			locationDict.create(stations[i].Name, stations[i].Code)
			sel.option(stations[i].Name)
		}
	}

	sel.changed(updateUrl)

	textAlign(CENTER)
	angleMode(DEGREES)
	textFont(HNB)

	setInterval(askWMATA, 1500)

	for (let i = 0; i < allTrains.length; i++) {
		//pieArray[i] = new chartClass(width / 12 * i, height / 2.5)
    pieArray[i] = new chartClass(0, 0)

	}

  print(20/width)
}

function draw() {
	background(28)

  //horizontal
	if (width > height) {
		push()
		translate(width / 40 + width*0.065, height/2.75)
		if (allTrains.length != 0) {
			for (let i = 0; i < allTrains.length; i++) {
				pieArray[i].display(allTrains, i)
     		translate(width/12+width*.08,0)

			}
		}
		pop()

	} else { //vertical

		push()
		translate(width/5, height/3-45)
		if (allTrains.length != 0) {
			for (let i = 0; i < allTrains.length / 2; i++) {
				pieArray[i].display(allTrains, i)
        translate((width / 4+width*0.04),0)
			}
			pop()

			if (allTrains.length >= 3) {
				push()
				translate(width/5, height / 1.83)
				
				for (let i = 3; i < allTrains.length; i++) {
					pieArray[i].display(allTrains, i)
          translate((width / 4+width*0.04),0)
				}
				pop()
			}
		}
	}

	timeElement()

}


function updateUrl() {
	locCode = locationDict.get(sel.value())
	url = 'https://api.wmata.com/StationPrediction.svc/json/GetPrediction/' + locCode + '?api_key=dc0b3a0b8ee54077aa4e71f03e600aef'
}

function askWMATA() {
	loadJSON(url, gotData, 'json')
}

function gotData(data) {
	allTrains = data["Trains"]
}