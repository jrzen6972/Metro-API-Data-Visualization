function cacheData(){
    date = [year(),month(),day()]
    time = [hour(),minute()]

    storeItem(date+"-"+time,allTrains)
}

// function getHour(hour){ to be revised later
//    let tempArr = []
//     for(let i = 0;i<60;i++){
//         tempVal = getItem("2022,4,14-"+hour+","+i)
//         tempArr[i] = tempVal
//     }
//     return processData(tempArr)
// }

function getHour2(day,hour){ //working func
    let tempArr = []
     for(let i = 0;i<60;i++){
         tempVal = getItem("2022,4," + day+ "-" +hour+","+i)
         if(tempVal == null){
            tempVal = [{Car: null, Min: 1}]
        }
         tempArr[i] = tempVal
     }
    return processData(tempArr)
 }

function processData(arr){
    let tempArr = []
    counter = 0
    for(let i =0; i<arr.length; i++){
        for(let j = 0; j<arr[i].length;j++){
            tempVal = arr[i][j].Min
            if(tempVal == 0 || tempVal == "ARR" || tempVal == "BRD" || tempVal == "---"){
                tempVal = 0
            } else {
                tempVal = int(tempVal)
            }
            tempArr[counter] = tempVal
            counter++
        }
    }
    return calculateAvg(tempArr)
}

function calculateAvg(arr){
    sum = (arr.reduce((a, b) => a + b, 0))
    avg = sum/arr.length
    return round(avg,2)
}