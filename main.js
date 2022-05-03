apiKey = 'dc0b3a0b8ee54077aa4e71f03e600aef'

url = 'https://api.wmata.com/StationPrediction.svc/json/GetPrediction/A01?api_key=' + apiKey
stationUrl = "https://api.wmata.com/Rail.svc/json/jStations?api_key=" + apiKey
statToStatUrl = "https://api.wmata.com/Rail.svc/json/jSrcStationToDstStationInfo?&api_key=" + apiKey

function preload() {
	me = getCurrentPosition()
	extDataTime = loadJSON('wmataAllTrains51.json')

	stationData = loadJSON(stationUrl) //run 1 time request for stations
	askWMATA() //get info for trains
	askOtherWMATA() //relative info

	//loads fonts
	HNB = loadFont("fonts/HelveticaNeue Bold.ttf")
	HNM = loadFont("fonts/HelveticaNeue Medium.ttf")
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	if (width < height) {
		mobile = true
	}

	locationDict = createStringDict("sample", "e")
	locationDict.remove("sample")

	stations = stationData["Stations"]

	//dropdown menu
	sel = createSelect();
	sel.style("background", "gray")
	sel.style("font-family", "Arial")
	sel.style("font-size", width / 46 + "px")
	sel.center()
	sel.style("text-align", "center")
	sel.size(width * 0.55, height * 0.059)
	if (mobile) {
		sel.position(width / 2 - sel.width / 2, height / 2 + (height / 6) + sel.height * 2)
	} else {
		sel.position(width / 2 - sel.width / 2, height * .92)
	}
	sel.changed(updateUrl)

	// print(relativeInfo)

	//Populate Location Dictionary and Dropdown Box
	for (let i = 0; i < stations.length; i++) {
		if (stations[i].Name == "Metro Center" || stations[i].Name == "Gallery Pl-Chinatown" || stations[i].Name == "L'Enfant Plaza" || stations[i].Name == "Fort Totten") {
			locationDict.create(stations[i].Name + i, stations[i].Code)
			sel.option(stations[i].Name + i)
		} else {
			locationDict.create(stations[i].Name, stations[i].Code)
			sel.option(stations[i].Name)
		}
	}
	userCoords = [me.latitude, me.longitude]

	onLaunch()


	textAlign(CENTER)
	angleMode(DEGREES)
	textFont(HNB)

	setInterval(askWMATA, 1500) //request every 1.5 seconds
	setInterval(cacheData, 60000) //cache data every minute

	if (mobile) { //mobile view
		//scaling
		xOrigin = (width / 5)
		xMulti = (width / 4 + width * 0.04)
		y = height / 3 - 45
		y2 = height / 1.83

		//populate pieArray
		for (let i = 0; i < 6 / 2; i++) {
			pieArray[i] = new chartClass(xOrigin + xMulti * i, y) //upper level
			pieArray[i + 3] = new chartClass(xOrigin + xMulti * i, y2) //lower level
		}
	} else { //desktop view
		//scaling
		xOrigin = (width / 40 + width * 0.055)
		xMulti = (width / 12 + width * 0.01)
		y = height * .3

		//populate pieArray
		for (let i = 0; i < 6; i++) {
			pieArray[i] = new chartClass(xOrigin + xMulti * i, y)
		}
	}

	y = height / 2 + 275
	for (let i = 0; i < 6; i++) {
		boxArray[i] = new barObj(xOrigin + 100 + (250 * i), y)
	}
	//avgVis elements
	createVis2Elements()
	mapSetup()

	setUpRelative()

	print(objs[0].col[0])
	print(objs[1].col[0])
}

function draw() {
	background(28)

	//load & show dotMap
	mapDraw()
	
	//faux background
	noFill()
	stroke(28)
	strokeWeight(40)
	rect(1200, 0, width, 400)
	strokeWeight(1)
	fill(28)
	rect(0, 0, 1200, height)
	rect(1200,400,width,height)

	noStroke()
	fill(255)
	textAlign(LEFT)
	textSize(width * 0.035)
	text("WMATA API Live Data & Dashboard", 25, 100)

	//text stuff
	textAlign(LEFT)
	textSize(20)
	fill("cyan")
	text(`Selected Station 1: ${objs[select1].name}`, 1300, 400)
	fill("gold")
	text(`Selected Station 2: ${objs[select2].name}`, 1300, 425)
	fill("pink")
	text(`Selected Station 3: ${objs[select3].name}`, 1300, 450)
	fill("brown")
	text(`Selected Station 4: ${objs[select4].name}`, 1300, 475)
	fill("lime")
	text(`Selected Station 5: ${objs[select5].name}`, 1300, 500)
	textSize(20)
	fill(255)

	//timeElement() //display clock


	if (allTrains.length != 0) {
		for (let i = 0; i < allTrains.length; i++) {
			pieArray[i].display(allTrains, i) //show train dots(inputting train data)
		}

		for (let i = 0; i < allTrains.length; i++) {
			pieArray[i].textPopUp() //ensure popups are above all dots
		}
	}
	textSize(32)
	fill(255)
	text("Average Train Wait Times", width * .33, height / 2)
	rectMode(CORNER)
	for (let i = 0; i < logStation.length; i++) {
		boxArray[i].display(avgArray, i, loggedDates, logStation) //show train dots(inputting train data)
	}


	drawRelative()

	textSize(15.75)

	text(nM(inpSlider.value() % 12) + amPM(inpSlider.value()), inpSlider.x + 100, inpSlider.y + 15)
}