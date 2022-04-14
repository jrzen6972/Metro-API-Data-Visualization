function findClosest() {
	let tempArr = []
	for (let i = 0; i < stationData.Stations.length; i++) {
		d1 = calcGeoDistance(userCoords[0], userCoords[1], stationData.Stations[i]["Lat"], stationData.Stations[i]["Lon"], 'mi')
		tempArr[i] = {"Name" : stationData.Stations[i]["Name"], "Distance" : d1}
	}
	distSort = tempArr.sort((a, b) => (a.Distance > b.Distance) ? 1 : -1)

	return(distSort[0])
}