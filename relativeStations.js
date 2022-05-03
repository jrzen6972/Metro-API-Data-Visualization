function updateStatToStatUrl(){
	locCode = locationDict.get(sel.value())
	statToStatUrl = "https://api.wmata.com/Rail.svc/json/jSrcStationToDstStationInfo?&api_key="+apiKey
}

function askOtherWMATA(){
	loadJSON(statToStatUrl,gotStatRelInfo,'json')
}

function gotStatRelInfo(StS){
	relativeInfo = StS["StationToStationInfos"] //relative info 
}

function showRelative(){
    filteredRelative = filterData(relativeInfo,locationDict2.data[sel.value()][0])
    // print(furtherFilterSelects(filteredRelative,"A01"))

    selectedArr = [
        [furtherFilterSelects(filteredRelative,locationDict2.data[objs[select1].name][0][0]),"cyan"],
        [furtherFilterSelects(filteredRelative,locationDict2.data[objs[select2].name][0][0]),"gold"],
        [furtherFilterSelects(filteredRelative,locationDict2.data[objs[select3].name][0][0]),"pink"],
        [furtherFilterSelects(filteredRelative,locationDict2.data[objs[select4].name][0][0]),"brown"],
        [furtherFilterSelects(filteredRelative,locationDict2.data[objs[select5].name][0][0]),"lime"],
    ]
    // print(selectedArr)
    // print(furtherFilterSelects(filteredRelative,locationDict2.data[objs[select3].name][0])
    //print(locationDict2.data[sel.value()][0])
}


function filterData(data,CurrentStation) {
    var filteredQuery = data.filter(function (ts) {
		return ts.SourceStation == CurrentStation 
	})

	return filteredQuery
}

function furtherFilterSelects(filteredArray,DestID){
    var filteredQuery = filteredArray.filter(function (ts) {
		return ts.DestinationStation == DestID 
	})

    return filteredQuery[0]
}