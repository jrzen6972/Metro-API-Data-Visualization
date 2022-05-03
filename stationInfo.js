apiKey = 'dc0b3a0b8ee54077aa4e71f03e600aef'
stationParkingUrl = "https://api.wmata.com/Rail.svc/json/jStationParking?api_key=" + apiKey
function preload(){
	
	stationParking = loadJSON(stationParkingUrl)
}
function loadDrop(){
	
	//populate dropdown boxes
	// Built in dropbox station/code
	stationNameCode = {"A07" : "Tenleytown-AU" , "A09": "Bethesda", "A11": "Grosvenor-Strathmore", "A12": "White Flint", "A13": "Twinbrook", "A14": "Rockville", "A15": "Shady Grove", "B04": "Rhode Island Ave-Brentwood", "B05": "Brookland-CUA", "B06": "Fort Totten", "B07": "Takoma", "B08": "Silver Spring", "B09": "Forest Glen", "B10": "Wheaton", "B11": "Glenmont", "C12": "Braddock Road", "C13": "King St-Old Town", "C15": "Huntington", "D09": "Minnesota Ave", "D10": "Deanwood", "D11": "Cheverly", "D12":"Landover", "D13": "New Carrollton",  "E06": "Fort Totten", "E07": "West Hyattsville", "E08": "Prince Georges Plaza", "E09": "College Park-U of Md", "E10": "Greenbelt", "F06": "Anacostia", "F07": "Congress Heights", "F08": "Southern Avenue", "F09": "Naylor Road", "F10": "Suitland", "F11": "Branch Ave", "G02": "Capital Heights", "G03": "Addison Road-Seat Pleasant", "G04":"Morgan Boulevard", "G05": "Largo Town Center", "J02": "Van Dorn Street", "J03": "Franconia-Springfield", "K05": "East Falls Church", "K06": "West Falls Church-VT/UVA", "K07": "Dunn Loring-Merrifield", "K08": "Vienna/Fairfax-GMU", "N06": "Wiehle-Reston East"}
	
}
function displayStation() {
	stationCode = stationParking['StationsParking']
	stationInfo = []
	stationCount = []
	//Station information dictionary, hosts station name/station code/ total parking count
	for (i = 0; i < stationCode.length; i++){// loops for the length of array
				stationInfo[i] = [stationCode[i].Code, stationCode[i]['AllDayParking'].TotalCount]//creates an array of station code + total count
	}
    print(stationInfo)
}