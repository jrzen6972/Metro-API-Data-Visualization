function timeElement() {
	stroke(0)
	textAlign(CENTER)
	fill("white")

	currentTime = [hour() % 12, minute()]

	//minute condition
	if (minute() < 10) {
		currentTime[1] = "0" + minute()
	}

	//display time
	if (mobile) { //mobile scale
		textSize(width * 0.17)
		text(nM(currentTime[0]) + ":" + currentTime[1], width / 2, 0)
		translate(width / 4.75 + width * 0.08, 0)
		textSize(width * 0.09)
		text(amPM(hour()), width / 2, 0)
	} else { //desktop scale
		textSize(width * 0.03)
		text(nM(currentTime[0]) + ":" + currentTime[1] + amPM(hour()),
			width *.9, height/2)
	}
}

function amPM(hour) {
	if (hour >= 12) {
		return " PM"
	} else {
		return " AM"
	}
}

function nM(hour){
	if (hour == 12 || hour == 0) {
		return 12
	}else{
		return hour
	}
}