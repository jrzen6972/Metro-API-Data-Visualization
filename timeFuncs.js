function timeElement() {
	push()
	translate(0, height / 7)

	stroke(0)
	textAlign(CENTER)
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
	if (width < height) { //mobile scale
		textSize(width * 0.17)
		text(currentTime[0] + ":" + currentTime[1], width / 2, 0)
		translate(width / 4.75 + width * 0.08, 0)
		textSize(width * 0.09)
		text(amPM(), width / 2, 0)
	} else { //desktop scale
		textSize(width * 0.06)
		text(currentTime[0] + ":" + currentTime[1],
			width / 2, 0)
		translate(width / 11, 0)
		textSize(width * 0.035)
		text(amPM(), width / 2, 0)
	}
	pop()
}

function amPM() {
	if (hour() > 12) {
		return "PM"
	} else {
		return "AM"
	}
}