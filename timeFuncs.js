function timeElement(){
	translate(0, height/6)

	//
	stroke(0)
	textSize(80)
	fill("white")

	currentTime = [hour() % 12, minute()]

	//minute condition
	if (minute() < 10) {
		currentTime[1] = "0" + minute()
	}
	//keep clock 12 hour
	if (hour() == 12 || hour() == 0) {
		currentTime[0] = 12
	}

	//display time
	text(currentTime[0] + ":" + currentTime[1], width / 2, 0)
	translate(width/4.75, 0)
	textSize(30)
	text(amPM(), width / 2, 0)
}

function amPM() {
	if (hour() > 12) {
		return "PM"
	} else {
		return "AM"
	}
}