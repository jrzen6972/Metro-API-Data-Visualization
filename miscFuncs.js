function mouseClicked() {
	sel.show()
	selMonth.show()
	inpDay.show()
	inpSlider.show()
	searchButt.show()
	clearButt.show()

	for (j = 0; j < pieArray.length; j++) {
		pieArray[j].clickedOn(mouseX, mouseY);
	}

	//stuff for highlighting
	for (let i = 0; i < stationsCoords.length; i++) {
		objs[i].highlight(mouseX, mouseY);
			if(sel.value()!= objs[i].name){
				// print([sel.value(),objs[i].name])
				if(objs[i].HL5){
					select5 = i
				}else if(objs[i].HL4){
					select4 = i
				}else if(objs[i].HL3){
					select3 = i
				}else if(objs[i].HL2){
					select2 = i
				}else if(objs[i].HL1){
					select1 = i
				}
				showRelative()

			}
	
		selectedNames = [select1,select2,select3,select4,select5]
	}
	
	if(keyIsDown(32)){
		resetMap()
		//selectedNames = [0,1,2,3,4]
		showRelative()
	}
	// i =1
	// print(objs[0]['HL'+i]))
}

function toggleState() {
	//state = !state	

	//if(!state){
	inpSlider.show()
	selMonth.show()
	inpDay.show()
	searchButt.show()
	clearButt.show()
	// }else{
	// 	inpSlider.hide()
	// 	selMonth.hide()
	// 	inpDay.hide()
	// 	searchButt.hide()
	// 	clearButt.hide()
	// }
}

function updateUrl() {
	locCode = locationDict.get(sel.value())
	url = 'https://api.wmata.com/StationPrediction.svc/json/GetPrediction/' + locCode + '?api_key=' + apiKey
	//loadJSON(url, gotData, 'json') only works on local
}

function askWMATA() {
	loadJSON(url, gotData, 'json')
}

function gotData(data) {
	allTrains = data["Trains"]
	sortTrains(allTrains)
}

function sortTrains(arr) {
	arr.sort((a, b) => (a.Group > b.Group) ? 1 : -1)
	arr.sort((a, b) => (a.Group > b.Group) ? 1 : -1) || (a.Min < b.Min) ? 1 : -1
}

function onLaunch() {
	sel.value(findClosest().Name)
	locCode = locationDict.get(findClosest().Name)
	url = 'https://api.wmata.com/StationPrediction.svc/json/GetPrediction/' + locCode + '?api_key=' + apiKey
	askWMATA()
	showRelative()
	objs[94].HL1= true
	objs[14].HL2= true
	objs[38].HL3= true
	objs[85].HL4= true
	objs[75].HL5= true	
}

function resetMap(){
	started = false
	Scale = 0
	
	for (let i = 0; i < objs.length; i++) {
		objs[i].Xc = mod[0]-35;
		objs[i].Yc = mod[1];
	}	
}

function findKey(object, value) {
	var keyArr = [];
	for (let key in object) {
		if (object[key] === value) {
			keyArr.push(key);
		}
	}
	if (keyArr.length > 0) {
		return keyArr;
	} else {
		return "Not Found";
	}
}