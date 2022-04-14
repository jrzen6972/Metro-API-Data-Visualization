function mouseClicked() {
	sel.show()

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
	sortTrains(allTrains)
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

// const dampingFactor = 0.05;

// damper = Damper();

// function Damper(val) {
//     this.val = 0;
//     function f(val) {
//         return this.val += dampingFactor * (val - this.val);
//     }
//     return f;
	
// }