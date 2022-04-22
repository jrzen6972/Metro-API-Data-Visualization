class chartClass {
	constructor(X, Y) {
		this.Xpos = X
		this.Ypos = Y
		this.hit = false
		if (width > height) {
			this.Size = (width * 0.15)*.75 //horizontal scale
		} else {
			this.Size = width * .25 //vertical scale
		}
		this.Rad = this.Size / 2 //radius for hitbox purposes
	}

	display(data, index) {
		this.data = data[index] //Individual train info

		push()
		noStroke()
		fill(0) ; circle(this.Xpos, this.Ypos, this.Size) //background circle

		if (this.data.Min == 'ARR' || this.data.Min == 'BRD') {
			fill(lineInfo[this.data.Line][0])
		} else {
			fill(0)
		}
		circle(this.Xpos, this.Ypos, this.Size * 0.95) //circle background colored when arc disappears

		fill(lineInfo[this.data.Line][0]) //fill based on line color
		arc(this.Xpos, this.Ypos, this.Size * 0.95, this.Size * .95, 270, 270 - (10 * this.data.Min)) //Dynamically adjusted arc | each notch 1/36 mins

		fill(0) ; circle(this.Xpos, this.Ypos, this.Size * 0.875) //first inner circle covering arc

		if (this.data.Min == 'ARR') {
			fill(248, 231, 28)
		} else if (this.data.Min == 'BRD') {
			fill(43, 179, 37)
		}
		circle(this.Xpos, this.Ypos, this.Size * 0.75) //Conditionally colored ring

		fill(0) ; circle(this.Xpos, this.Ypos, this.Size * 0.70) //Black innermost circle

		textAlign(CENTER)
		fill(lineInfo[this.data.Line][0])
		textSize(this.Size * 0.13) ; text(this.data.Destination, this.Xpos, this.Ypos + this.Size * 0.05) //destination text
		fill(255)
		textSize(this.Size*0.11) ; text(this.data.Min, this.Xpos, this.Ypos + this.Size * 0.225) //minute text
		pop()
	}

	clickedOn(mX, mY) {
		if (dist(this.Xpos, this.Ypos, mX, mY) < this.Rad) {
			this.hit = true
		} else {
			this.hit = false
		}
	}

	stationsLeft(line, destination, currentStation) {
		if (line != 'No') {
			this.directedArr = lineInfo[line][1].slice() //get the respective line's destinations

			if (this.directedArr.indexOf(destination) < this.directedArr.indexOf(currentStation)) {
				this.newArr = this.directedArr.slice(this.directedArr.indexOf(destination), this.directedArr.indexOf(currentStation) + 1)
				this.newArr.reverse()
			} else {
				this.newArr = this.directedArr.slice(this.directedArr.indexOf(currentStation), this.directedArr.indexOf(destination) + 1)
			}

			this.stacked = this.newArr.join('\n')
			return this.stacked
		}
	}

	textPopUp() {
		if (this.hit) {
			sel.hide()

			fill(28, 170) ; rect(0, 0, width, height) //popup transparent rect

			fill(255) ; textAlign(LEFT)
			textSize(height / 25) ; text("Remaining Stops:",width / 2 - this.Size, height / 19)
			textSize(height / 35)
			if (this.data.Line != "No"){
				text("\n" + this.stationsLeft(this.data.Line, this.data.DestinationName, this.data.LocationName),
					width / 2 - this.Size, height / 19)
			}else{
				text("No passenger train" + "\nNo data",width / 2 - this.Size, height / 19)
			}
		}
	}
}