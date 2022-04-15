//storedData = []

//dataCounter = 0

function cacheData(){
    date = [year(),month(),day()]
    time = [hour(),minute()]
    //storedData[dataCounter] = [date,time,allTrains]
    //dataCounter++
    //print(storedData)

    storeItem(date+"-"+time,allTrains)
    //ex. "2022,4,14-20,54" - 2022,4,14 - 8:54pm
    //print(date+time)
}