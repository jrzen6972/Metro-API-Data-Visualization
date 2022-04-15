function cacheData(){
    date = [year(),month(),day()]
    time = [hour(),minute()]

    storeItem(date+"-"+time,allTrains)
}

function getHour(hour){
    tempArr = []
    for(let i = 0;i<60;i+=5){
        tempVal = getItem("2022,4,14-"+hour+","+i)
        tempArr[i] = tempVal
    }
    processData(tempArr)
}

function processData(arr){
    tempArr = []
    counter = 0
    for(let i =0; i<arr.length; i+=5){
        for(let j = 0; j<arr[i].length;j++){
            tempVal = arr[i][j].Min
            if(tempVal == 0 || tempVal == "ARR" || tempVal == "BRD"){
                tempVal = 0
            } else {
                tempVal = int(tempVal)
            }
            tempArr[counter] = tempVal
            counter++
        }
    }
    print(tempArr)
    print(calculateAvg(tempArr))
   // print(arr[0][0].Min)
}

function calculateAvg(arr){
    sum = (arr.reduce((a, b) => a + b, 0))
    avg = sum/arr.length
    return round(avg,2)
}