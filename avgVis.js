state = true

boxArray = []

loggedDates = []

logStation = []

avgCounter = 0;
avgArray = []

function createVis2Elements() {
	selMonth = createSelect();
	selMonth.style("background", "white")
	selMonth.style("font-family", "Arial")
	selMonth.center()
	selMonth.style("text-align", "center")
	selMonth.size(177, 21)
	selMonth.position(25, height / 2 + 50)
	for (const [key] of Object.entries(monthDict)) {
		selMonth.option(key)
	}
	selMonth.value(findKey(monthDict, month()))
	// selMonth.hide()

	inpDay = createInput("Input a Day")
	inpDay.position(25, height / 2 + 100)
	inpDay.style("text-align", "center")
	inpDay.value(day())
	// inpDay.hide()

	inpSlider = createSlider(0, 23, 12, 1)
	inpSlider.position(-25, height / 2 + 185)
	inpSlider.style("transform", "rotate(-90deg)");
	inpSlider.value(hour()-1)
	// inpSlider.hide()

	searchButt = createButton('Search')
	searchButt.position(25, height / 2 + 275)
	searchButt.mousePressed(updateNood)
	// searchButt.hide()

	clearButt = createButton('Clear Selection')
	clearButt.position(25, height / 2 + 325)
	clearButt.mousePressed(clearSelection)
	// clearButt.hide()
}
let max = false
function updateNood() {
	// avgArray[avgCounter] = getHour(sel.value(), monthDict[selMonth.value()], inpDay.value(), inpSlider.value())
	if(avgArray.length<5){
		
		avgArray[avgCounter] = prepDayData(extDataTime,sel.value(),2022,(monthDict[selMonth.value()]-1),inpDay.value(),inpSlider.value())
		logStation[avgCounter] = sel.value()
		loggedDates[avgCounter] = [
			"Month: " + selMonth.value() +
			"\nDay: " + inpDay.value() +
			"\nHour: " + nM(inpSlider.value() % 12) + amPM(inpSlider.value()) +
			"\nStation: " + sel.value()
		]
		avgCounter++
	} else{
		max = true
	}
}

function clearSelection() {
	avgArray = []
	loggedDates = []
	logStation = []
	avgCounter = 0
	max = false
}