apiKey = 'dc0b3a0b8ee54077aa4e71f03e600aef'

url = 'https://api.wmata.com/StationPrediction.svc/json/GetPrediction/A01?api_key=' + apiKey
stationUrl = "https://api.wmata.com/Rail.svc/json/jStations?api_key=" + apiKey

urlTime = 'https://api.wmata.com/Rail.svc/json/jSrcStationToDstStationInfo?FromStationCode=A01&api_key=' + apiKey

function preload() {
	me = getCurrentPosition()
	stationData = loadJSON(stationUrl) //run 1 time request for stations
	askWMATA()	//get info for trains

	//loads fonts
	HNB = loadFont("fonts/HelveticaNeue Bold.ttf")
	HNM = loadFont("fonts/HelveticaNeue Medium.ttf")

	stationData_rm = loadJSON(urlTime) // Loads Station to Station api url
	askRailTime()
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	if(width<height){
		mobile = true
	}

	locationDict = createStringDict("sample", "e")
	locationDict.remove("sample")

	stations = stationData["Stations"]
	stations_rm = stationData_rm['StationToStationInfos']


	//dropdown menu — General (bottom)
	sel = createSelect();
	sel.style("background", "gray")
	sel.style("font-family", "Arial")
	sel.style("font-size", width / 46 + "px")
	sel.center()
	sel.style("text-align", "center")
	sel.size(width * 0.55, height * 0.059)
	if(mobile){
		sel.position(width / 2 - sel.width / 2, height / 2 + (height/6) + sel.height * 2)
	}else{
		sel.position(width / 2 - sel.width / 2, height *.92)
	}
	sel.changed(updateUrl)

	//dropdown menu for RailTime
	// selTime = createSelect();
	// selTime.style("background", "gray")
	// selTime.style("font-family", "Arial")
	// selTime.style("font-size", width / 46 + "px")
	// selTime.position(windowWidth * 0.75, windowHeight * 0.37)
	// selTime.style("text-align", "center")
	// selTime.size(width * 0.25, height * 0.059)
	// selTime.changed(updateTimeUrl)

	//Populate Location Dictionary and Dropdown Box
	for (let i = 0; i < stations.length; i++) {
		if (stations[i].Name == "Metro Center" || stations[i].Name == "Gallery Pl-Chinatown" || stations[i].Name == "L'Enfant Plaza" || stations[i].Name == "Fort Totten") {
			locationDict.create(stations[i].Name + i, stations[i].Code)
			sel.option(stations[i].Name + i) // Bottom drop down menu
			// selTime.option(stations[i].Name + i) // For the time being, a menu for rail time
		} else {
			locationDict.create(stations[i].Name, stations[i].Code)
			sel.option(stations[i].Name + i) // Bottom drop down menu
			// selTime.option(stations[i].Name + i) // For the time being, a menu for rail time
		}
	}
	userCoords = [me.latitude,me.longitude]

	onLaunch()
		

	textAlign(CENTER)
	angleMode(DEGREES)
	textFont(HNB)

	setInterval(askWMATA, 1500) //request every 1.5 seconds
	setInterval(askRailTime,1500) 
	setInterval(cacheData,60000) //cache data every minute

	if (mobile) {  //mobile view
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
		xMulti = (width / 12 + width * 0.04)
		y = height * .3
	
		//populate pieArray
		for (let i = 0; i < 6; i++) {
			pieArray[i] = new chartClass(xOrigin + xMulti * i, y)
		}
	}

	y = height/2+275
	for (let i = 0; i < 6; i++) {
		boxArray[i] = new barObj(xOrigin + 100 + (250 * i), y)
	}
	//avgVis elements
	createVis2Elements()	
}

function stationPaths() {
	routeMap = 	stationData_rm['Path'];
	
	railTime1 = stationData_rm['StationToStationInfos'][0].RailTime
	sourceStation1 = stationData_rm['StationToStationInfos'][0].SourceStation
	destStation1 = stationData_rm['StationToStationInfos'][0].DestinationStation
}

function draw() {
	stationPaths()
	let middle = windowHeight/2

	background(28)
		textAlign(CENTER)
		textSize(width * 0.05)
		text("WMATA API Live Data & Dashboard",width/2,100)

		timeElement() //display clock
		if (allTrains.length != 0) {
			for (let i = 0; i < allTrains.length; i++) {
				pieArray[i].display(allTrains, i) //show train dots(inputting train data)

			}

			for(let i = 0; i < allTime.length; i++) {
				pieArray[i].display(allTime, i)
			}
		
			for(let i = 0; i<allTrains.length;i++){
				pieArray[i].textPopUp()	//ensure popups are above all dots
			}
		}
		textSize(32)
		text("Average Train Wait Times", width*.33, height/2)
		rectMode(CORNER)
		for (let i = 0; i < boxArray.length; i++) {
			boxArray[i].display(avgArray, i,loggedDates) //show train dots(inputting train data)
		}
		text(nM(inpSlider.value()%12)+ amPM(inpSlider.value()),inpSlider.x+100,inpSlider.y+15)
	
		// Information and text for average wait times using the station to station API. Currently, the array is broken.
		// textSize(20)
		// if (allTime.length != 0) {
		// 	for (let i = 0; i < allTime.length; i++) {
		// 		// timeArray[i].display(text('Average ride time between ' + sourceStation[i] + " and " + destStation[i], width * 0.78, height/2.75))
		// 		// pieArray[i].display(allTime, i, text('Average ride time between ' + sourceStation[i] + " and " + destStation[i], width * 0.78, height/2.75))
		// 		pieArray[i].display(allTime, i)
		// 	}
		// }

		// let stationInfo_txt = text('Average ride time between ', width * 0.78, height/2.75);
		// let railTime_txt = text(sourceStation1 + " and " + destStation1 + ": " + railTime1 + ' minutes.', width * 0.78, height/2.55);

}