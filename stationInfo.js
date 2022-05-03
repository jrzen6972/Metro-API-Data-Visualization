apiKey = 'dc0b3a0b8ee54077aa4e71f03e600aef'
url = 'https://api.wmata.com/StationPrediction.svc/json/GetPrediction/A01?api_key=' + apiKey
stationUrl = "https://api.wmata.com/Rail.svc/json/jStations?api_key=" + apiKey
stationParkingUrl = "https://api.wmata.com/Rail.svc/json/jStationParking?api_key=" + apiKey


function preload(){
	stationData = loadJSON(stationUrl)
	stationParking = loadJSON(stationParkingUrl)
}
function loadDrop(){
    stations = stationData["Stations"]
		stationCode = stationParking['StationsParking']
		//Independent Dictionaries for each dropdownbox
		locationDict1 = createStringDict("sample", "e")
		locationDict1.remove("sample")
		locationDict2 = createStringDict("sample", "e")
		locationDict2.remove("sample")
		
		//dropdown 1
		compareOne = createSelect("Station 1");
		compareOne.style("background", "gray")
		compareOne.style("font-family", "Arial")
		compareOne.style("font-size", width / 46 + "px")
		compareOne.style("text-align", "center")
		compareOne.size(width * 0.55, height * 0.059)
		compareOne.position(50,50)
	
		//dropdown 2
		compareTwo = createSelect("Station 2");
		compareTwo.style("background", "gray")
		compareTwo.style("font-family", "Arial")
		compareTwo.style("font-size", width / 46 + "px")
		compareTwo.style("text-align", "center")
		compareTwo.size(width * 0.55, height * 0.059)
		compareTwo.position(50, 300)
	
		//populate dropdown boxes
	// Built in dropbox station/code
    stationNameCode = {"A07" : "Tenleytown-AU" , "A09": "Bethesda", "A11": "Grosvenor-Strathmore", "A12": "White Flint", "A13": "Twinbrook", "A14": "Rockville", "A15": "Shady Grove", "B04": "Rhode Island Ave-Brentwood", "B05": "Brookland-CUA", "B06": "Fort Totten", "B07": "Takoma", "B08": "Silver Spring", "B09": "Forest Glen", "B10": "Wheaton", "B11": "Glenmont", "C12": "Braddock Road", "C13": "King St-Old Town", "C15": "Huntington", "D09": "Minnesota Ave", "D10": "Deanwood", "D11": "Cheverly", "D12":"Landover", "D13": "New Carrollton",  "E06": "Fort Totten", "E07": "West Hyattsville", "E08": "Prince Georges Plaza", "E09": "College Park-U of Md", "E10": "Greenbelt", "F06": "Anacostia", "F07": "Congress Heights", "F08": "Southern Avenue", "F09": "Naylor Road", "F10": "Suitland", "F11": "Branch Ave", "G02": "Capital Heights", "G03": "Addison Road-Seat Pleasant", "G04":"Morgan Boulevard", "G05": "Largo Town Center", "J02": "Van Dorn Street", "J03": "Franconia-Springfield", "K05": "East Falls Church", "K06": "West Falls Church-VT/UVA", "K07": "Dunn Loring-Merrifield", "K08": "Vienna/Fairfax-GMU", "N06": "Wiehle-Reston East"}

    for 
}
function displayStation() {
	stationCode = stationParking['StationsParking']
	stationInfo = []
	//stationCount1 = n //holds total parking for dropbox1 selected
	//stationCount2 = n //holds total parking for dropbox2 selected
	//Station information dictionary, hosts station name/station code/ total parking count
	for (i = 0; i < stationCode.length; i++){// loops for the length of array
				stationInfo += ["'"+ stationCode[i].Code + "'"]
		
		//stationInfo = [stationCode[i]]
		//print(stationCode.length - 1)
		//print(stationCode[i])
		//print(stationInfo)
		
	}
	print(stationInfo)
	print(locationDict2)
	//const intersection = locationDict1.filter(element = stationCode.includes(element));
	//print(stationCode)
	//print(intersection)
	//stationCode[i].Code
	//stationCode[i]['AllDayParking'].TotalCount
	//print(stations)
	//print(locationDict)
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	loadDrop()
	displayStation()
}