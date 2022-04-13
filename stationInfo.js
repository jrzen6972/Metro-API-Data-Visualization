apiKey = '5c858b68030b4c2ba24baf6cd609d6dd'
stationUrl = 'https://api.wmata.com/Rail.svc/json/jStationParking?api_key=' + apiKey

function preload(){
	stationData = loadJSON(stationUrl)
}
function getStation(){
	stationInfo = stationData['StationsParking']
	Code1 = stationInfo[3].Code
	TotalCount1 = stationInfo[3]['AllDayParking'].TotalCount
	Code2 = stationInfo[4].Code
	TotalCount2 = stationInfo[4]['AllDayParking'].TotalCount
	riderCost1 = stationInfo[3]['AllDayParking'].RiderCost
	riderCost2 = stationInfo[4]['AllDayParking'].RiderCost
	nonriderCost1 = stationInfo[3]['AllDayParking'].NonRiderCost
	nonriderCost2 = stationInfo[4]['AllDayParking'].NonRiderCost
}

function setup() {
	getStation()
	//Graph display for Total spots available
	const ctx1 = document.getElementById('chart1').getContext('2d');
	const myChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: [Code1, Code2],
        datasets: [{
            label: 'All Day Parking Spaces available',
            data: [TotalCount1,TotalCount2],
            backgroundColor: [
							//Color for the bar color 
                'rgba(54, 162, 235, 0.2)',//blue,
                'rgba(153, 102, 255, 0.2)'//purple, 
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
	//Graph display of riders vs nonriders
	const ctx2 = document.getElementById('chart2').getContext('2d');
	const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: [Code1, Code2, Code1, Code2],
        datasets: [{
            label: 'Cost of Parking',
            data: [riderCost1,riderCost2, nonriderCost1, nonriderCost2],
            backgroundColor: [
							//Color for the bar color 
                'rgba(54, 162, 235, 0.2)',//blue (a12),
                'rgba(153, 102, 255, 0.2)',//purple (a13), 
								'rgba(54, 162, 235, 0.2)',//blue (a12),
                'rgba(153, 102, 255, 0.2)'//purple (a13), 
            ],
            borderColor: [
                'rgba(54, 162, 235, 0.2)',//blue (a12),
                'rgba(153, 102, 255, 0.2)',//purple (a13), 
								'rgba(54, 162, 235, 0.2)',//blue (a12),
                'rgba(153, 102, 255, 0.2)'//purple (a13), 
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}
	
//all day parking
//static picture of what happends for orange line parking data.
// riders cost vs non riders - bar chart (parking) / short term or long term
// bar chart that the rectangles have a height of the total count station to station
/*"AllDayParking": {
      "TotalCount": 0,
      "RiderCost": null,
      "NonRiderCost": null,
      "SaturdayRiderCost": null,
      "SaturdayNonRiderCost": null */