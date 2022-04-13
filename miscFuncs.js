function mouseClicked() {
	sel.show() //brings back menu after toggled off by .clickedOn()

	for (j = 0; j < pieArray.length; j++) {
		pieArray[j].clickedOn(mouseX, mouseY);
	}
}

function updateUrl() {
	locCode = locationDict.get(sel.value())
	url = 'https://api.wmata.com/StationPrediction.svc/json/GetPrediction/' + locCode + '?api_key=' + apiKey
	loadJSON(url, gotData, 'json') //only works on local | updates url immedately after swapping
}

function askWMATA() {
	loadJSON(url, gotData, 'json')
}

// function gotData(data) {
// 	allTrains = data["Trains"]
// }

// function newFunc(array){
//     return sortedArray
// }

// Stuff ain't working...

function gotData(data) {
	allTrains = data["Trains"]
	newFunc(allTrains)
}

const groupData = [
	{group: "2"},
	{group: "1"},
	{group: "2"},
	{group: "1"},
	{group: "2"},
	{group: "1"}
];

function newFunc(array){
	// url = 'https://api.wmata.com/StationPrediction.svc/json/GetPrediction/' + apiKey
	// loadJSON(url, gotData, 'json')

	let sortedArray = groupData.groupBy( ({ group }) => group );

    return sortedArray
}


// function gotData(data) {
//     allTrains = data["Trains"]
//     sortedArray(allTrains)
// }

// const groupData = [
// 	{"Group":"2"},
// 	{"Group":"1"},
// 	{"Group":"2"},
// 	{"Group":"1"},
// 	{"Group":"2"},
// 	{"Group":"1"}
// ];

// function sortedArray(array){
// 	let result = groupData.groupBy( ({ Group }) => Group );
//     return sortedArray
// };

// const groupData = [
// 	{"DestinationName":"Shady Grove","Group":"2"},
// 	{"DestinationName":"Glenmont","Group":"1"},
// 	{"DestinationName":"Shady Grove","Group":"2"},
// 	{"DestinationName":"Glenmont","Group":"1"},
// 	{"DestinationName":"Shady Grove","Group":"2"},
// 	{"DestinationName":"Glenmont","Group":"1"}
// ];
