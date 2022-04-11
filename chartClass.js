class chartClass {
	constructor(X, Y) {
		this.Xpos = X
		this.Ypos = Y
		this.hit = false
		if (width > height) {
			this.Size = width * 0.15 //200 //random(100,300)
		} else {
			this.Size = width * .25
		}
		this.Rad = this.Size / 2
		this.directedArr = []
		this.newArr = []
	}

	display(data, index) {
		//Individual train info
		this.data = data[index]

		push()

		//Circles
		noStroke()
		fill(0)
		circle(this.Xpos, this.Ypos, this.Size)

		if (this.data.Min == 'ARR' || this.data.Min == 'BRD') {
			fill(lineColors[this.data.Line])
		} else {
			fill(0)
		}
		circle(this.Xpos, this.Ypos, this.Size * 0.95) //Dynamic colored circle background

		fill(lineColors[this.data.Line]) //fill based on line color
		arc(this.Xpos, this.Ypos, this.Size * 0.95, this.Size * .95, 270, 270 - (15 * this.data.Min)) //Dynamically adjusted arc

		fill(0)
		circle(this.Xpos, this.Ypos, this.Size * 0.875) //Black inner circle

		if (this.data.Min == 'ARR') {
			fill(248, 231, 28)
		} else if (this.data.Min == 'BRD') {
			fill(43, 179, 37)
		}
		circle(this.Xpos, this.Ypos, this.Size * 0.75) //Conditionally colored inner circle

		fill(0)
		circle(this.Xpos, this.Ypos, this.Size * 0.70) //Black inner circle

		if (this.hit == true) {
			fill(75)
			textAlign(LEFT)
			textSize(9)
			fill(255)
			text(this.stationsLeft(this.data.Line,this.data.DestinationName,this.data.LocationName),
			this.Xpos-this.Size/4,this.Ypos+this.Size/5)
		}

		noStroke()
		strokeWeight(this.Size * 0.01)
		fill(lineColors[this.data.Line])
		textAlign(CENTER)
		textSize(this.Size * 0.13) //Textsize and outline scale with size
		text(this.data.Destination, this.Xpos, this.Ypos + this.Size * 0.05) //Text
		noStroke()
		fill(0)
		pop()
	}

	clickedOn(mX, mY) {
		let dotRight = this.Xpos + this.Rad;
		let dotLeft = this.Xpos - this.Rad;

		let dotBot = this.Ypos + this.Rad;
		let dotTop = this.Ypos - this.Rad;

		if ((mX < dotRight) && (mX > dotLeft) && (mY > dotTop) && (mY < dotBot)) {
			this.hit = true
		} else {
			this.hit = false
		}
	}

	stationsLeft(line, destination, currentStation) {
		this.directedArr = lineStops[line].slice() //get the respective line's destinations

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