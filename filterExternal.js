
function prepDayData(data,station,year,month,day,hour) {
	let jsonToArr = []
	let filtered = []
	for(var i in data){
		jsonToArr.push(data[i])
	}
	
	filtered = jsonToArr.filter(function (st) {
		return st.date["year"] == year &&
			st.date["month"] == month &&
			st.date["day"] == day &&
			st.time["hour"] <= hour	&&
			st.time["hour"] >= hour
	})

	return workData(filtered,station)
}

function workData(arr,station) {
	let tempVal = []
	let tempArr = []
	let tempArr2 = []

	for (let i = 0; i < arr.length; i++) {
		tempVal = arr[i].trainData
		tempArr[i] = tempVal
	}
	for (let i = 0; i < tempArr.length; i++) {
		tempArr2[i] = tempArr[i][station]
	}

	return processData(tempArr2)
}


function processData(arr) {
	let tempArr = []
	counter = 0
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			tempVal = arr[i][j].Min
			if (tempVal == 0 || tempVal == "ARR" || tempVal == "BRD" || tempVal == "---") {
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

function calculateAvg(arr) {
	sum = (arr.reduce((a, b) => a + b, 0))
	avg = sum / arr.length
	return round(avg, 2)
}