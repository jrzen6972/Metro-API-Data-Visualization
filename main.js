apiKey = 'dc0b3a0b8ee54077aa4e71f03e600aef'

url = 'https://api.wmata.com/StationPrediction.svc/json/GetPrediction/A01?api_key=' + apiKey
stationUrl = "https://api.wmata.com/Rail.svc/json/jStations?api_key=" + apiKey

<<<<<<< HEAD
//let allTrains
let pieArray = [
	['Shady Grove', 'Shady Grove', 'Shady Grove'],
	['Glenmont', 'Glenmont', 'Glenmont'],
];

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
=======
>>>>>>> caa5012885951c062ac54297f05ecb77fa4b1935

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

	if (width > height) {
		xOrigin = (width / 40 + width * 0.065)
		xMulti = (width / 12 + width * 0.08)
		y = height / 2.75

		for (let i = 0; i < allTrains.length; i++) {
			pieArray[i] = new chartClass(xOrigin + xMulti * i, y)
		}

	} else {
		xOrigin = (width / 5)
		xMulti = (width / 4 + width * 0.04)
		y = height / 3 - 45
		y2 = height / 1.83

		for (let i = 0; i < allTrains.length / 2; i++) {
			pieArray[i] = new chartClass(xOrigin + xMulti * i, y)
			pieArray[i + 3] = new chartClass(xOrigin + xMulti * i, y2)
		}
	}

}

function draw() {
	background(28)

	timeElement()

	if (allTrains.length != 0) {
		for (let i = 0; i < allTrains.length; i++) {
			pieArray[i].display(allTrains, i)
		}
	
		for(let i = 0; i<allTrains.length;i++){
			pieArray[i].textPopUp()
		}
	}
}