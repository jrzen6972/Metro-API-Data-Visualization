state = false

boxArray = []

loggedDates = []


avgCounter = 0; avgArray = []

function createVis2Elements(){
    v2butt = createButton("Toggle Display")
	v2butt.position(width / 1.2, height / 1.2)
	v2butt.mousePressed(toggleState)


    inpMonth = createInput("April")
    inpMonth.position(50,50)
   // inpMonth.hide()

    inpDay = createInput("Input a Day")
    inpDay.position(50,100)
   // inpDay.hide()


	inpHour = createInput("Input an Hour")
    inpHour.position(50,200)
    //inpHour.hide()

    searchButt = createButton('Search')
    searchButt.position(50,300)
   	searchButt.mousePressed(updateNood)
   // searchButt.hide()

    clearButt = createButton('Clear Selection')
    clearButt.position(50, 400)
   	clearButt.mousePressed(clearSelection)
    //clearButt.hide()

	//getHour(noodle)
}

function updateNood(){
    avgArray[avgCounter] =  getHour2(inpDay.value(),inpHour.value())
    loggedDates[avgCounter] = ["D: " + inpDay.value() + "\nH: " + inpHour.value()]
    avgCounter++
    print([avgArray, loggedDates])
}

function clearSelection(){
    avgArray = []
    loggedDates = []
    avgCounter = 0
    print(avgArray)
}