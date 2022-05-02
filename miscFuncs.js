function mouseClicked() {
	sel.show()

	for (j = 0; j < pieArray.length; j++) {
		pieArray[j].clickedOn(mouseX, mouseY);
	}
}

function toggleState(){
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

	// locCode2 = locationDict.get(selTime.value())
	urlTime = 'https://api.wmata.com/Rail.svc/json/jSrcStationToDstStationInfo' + locCode + '&api_key=' + apiKey
}

function askWMATA() {
	loadJSON(url, gotData, 'json')
}

function askRailTime() {
	loadJSON(urlTime, gotDataTime, 'json')
}

function gotData(data) {
	allTrains = data["Trains"]
	sortTrains(allTrains)
}

function gotDataTime(data) {
	allTime = data["StationToStationInfos"]
	allTime.print()
}

function sortTrains(arr){
	arr.sort((a, b) => (a.Group > b.Group) ? 1 : -1)
	arr.sort((a, b) => (a.Group > b.Group) ? 1 : -1) || (a.Min < b.Min) ? 1:-1
}

function onLaunch(){
	sel.value(findClosest().Name)
	locCode = locationDict.get(findClosest().Name)
	url = 'https://api.wmata.com/StationPrediction.svc/json/GetPrediction/' + locCode + '?api_key=' + apiKey
	askWMATA()
}

function findKey(object, value){
    var keyArr=[];
    for (let key in object)
    {
        if (object[key] === value) 
        {
            keyArr.push(key);
        }
    }
    if(keyArr.length >0 )
    {
    return keyArr;
    }
    else
    {
        return "Not Found";
    }
}