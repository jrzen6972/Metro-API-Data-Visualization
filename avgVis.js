state = true

boxArray = []

loggedDates = []


avgCounter = 0; avgArray = []

function createVis2Elements(){
    // v2butt = createButton("Toggle Display")
	// v2butt.position(width / 1.2, height / 1.2)
	// v2butt.mousePressed(toggleState)

    selMonth = createSelect();
	selMonth.style("background", "white")
	selMonth.style("font-family", "Arial")
	selMonth.center()
	selMonth.style("text-align", "center")
	selMonth.size(177,21)
    selMonth.position(25,height/2+50)
    for(const [key] of Object.entries(monthDict)){
        selMonth.option(key)        
    }
    selMonth.value(findKey(monthDict,month()))
    // selMonth.hide()

    inpDay = createInput("Input a Day")
    inpDay.position(25,height/2+100)
    inpDay.style("text-align", "center")
    inpDay.value(day())
    // inpDay.hide()

    inpSlider = createSlider(0,23,12,1)
    inpSlider.position(-25,height/2+185)
    inpSlider.style("transform", "rotate(-90deg)");
    inpSlider.value(hour())
    // inpSlider.hide()

    searchButt = createButton('Search')
    searchButt.position(25,height/2+275)
   	searchButt.mousePressed(updateNood)
    // searchButt.hide()

    clearButt = createButton('Clear Selection')
    clearButt.position(25, height/2+325)
   	clearButt.mousePressed(clearSelection)
    // clearButt.hide()
}

function updateNood(){
    avgArray[avgCounter] =  getHour(sel.value(), monthDict[selMonth.value()],inpDay.value(),inpSlider.value())
    loggedDates[avgCounter] = [
        "Month: "+ selMonth.value() +
        "\nDay: " + inpDay.value() + 
        "\nHour: " + nM(inpSlider.value()%12)+ amPM(inpSlider.value()) +
        "\nStation: " + sel.value()]
    avgCounter++
    print([avgArray, loggedDates])
}

function clearSelection(){
    avgArray = []
    loggedDates = []
    avgCounter = 0
    print(avgArray)
}