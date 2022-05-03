let valueX = 0
let valueY = 0
let ScaleChange = 0
let Scale = 0
let started = false
let startScale = 0.65

transVal = 1300 //scaling modifier
stationsCoords = [] //array with latitude, longitude, and station names
objs = [] //object array
// selected1 = 0 //default values
// selected2 = 1 //default values
select1 = 94
select2 = 14
select3 = 38
select4 = 85
select5 = 75

selectedNames = [select1,select2,select3,select4,select5]

function mapSetup(){
	locationDict2 = new p5.TypedDict()
	mod = [width*.8463,height*.4536-230]
		
	//this forloop creates a dictionary of all stations and their lines
	//api has a unique problem with two levels having the same "Name" value, a condition in here combines the data of each level
	for (let i = 0; i < stations.length; i++) {
		if (stations[i].StationTogether1 == "") {
			stationLines = []
			for (let j = 1; j < 5; j++) {
				tempVar = stations[i]["LineCode" + j]
				if (tempVar != null) {
					stationLines.push(tempVar)
				}
			}
			locationDict2.create(stations[i].Name, [[stations[i].Code], stationLines])
		} else {
			stationLines = []
			for (let j = 1; j < 5; j++) {
				tempVar = stations[i]["LineCode" + j]
				if (tempVar != null) {
					stationLines.push(tempVar)
				}
			}
			tempVar2 = 0
			combined = 0
			if (locationDict2.data[stations[i].Name] != undefined) { //checks if there is an entry with identical key
				tempVar2 = (locationDict2.data[stations[i].Name]) //if there is, return the data found there
				if (tempVar2 != 0)
					combined = [...stationLines, ...tempVar2[1]] //combine the arrays
			}
			locationDict2.create(stations[i].Name, [
				[stations[i].Code, stations[i].StationTogether1], stationLines
			])
			if (combined != 0)
				locationDict2.create(stations[i].Name, [
					[stations[i].Code, stations[i].StationTogether1], combined
				])
		}

		for (let i = 0; i < stations.length; i++) {
			stationsCoords[i] = [(stations[i].Lon + 77) * transVal + mod[0], (stations[i].Lat - 38) * (-1 * transVal) + height + mod[1] + 50, stations[i].Name]
			objs[i] = new circ((stationsCoords[i][0]), (stationsCoords[i][1]), mod[0]-35,mod[1] , stationsCoords[i][2],hexArr3)
		}
	}
}

function mapDraw(){
	if (!started) {
		if (Scale < startScale) {
			Scale = lerp(Scale, startScale, 0.025)
		} else {
			started = true
		}
	}

	//show all objs
	for (let i = 0; i < stationsCoords.length; i++) {
		objs[i].showAng(Scale)
		// objs[i].show();
	}
    
	scaleMapFuncs()
}


function scaleMapFuncs() {

	if (keyIsDown(LEFT_ARROW)){
		valueX = -10;
    }
	if (keyIsDown(RIGHT_ARROW)){
		valueX = 10;
    }
	if (keyIsDown(UP_ARROW)){
		valueY = -10
    }
	if (keyIsDown(DOWN_ARROW)){
		valueY = 10
    }

	if (keyIsDown(33))
		ScaleChange = 0.1;
	if (keyIsDown(34))
		ScaleChange = -0.1;

	Scale += ScaleChange;
	for (let i = 0; i < objs.length; i++) {
		objs[i].Xc += valueX;
		objs[i].Yc += valueY;
	}
	valueX = 0;
	valueY = 0;
	ScaleChange = 0;

}