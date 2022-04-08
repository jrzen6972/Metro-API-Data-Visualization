function mouseClicked() {
	for (j = 0; j < pieArray.length; j++) {
		pieArray[j].clickedOn(mouseX, mouseY);
	}
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
}