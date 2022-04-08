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
		// if (this.hit == false) {
		// 	fill(0)
		// } else {
		// 	fill(255)
		// }
		fill(0)
		circle(this.Xpos, this.Ypos, this.Size * 0.70) //Black inner circle

		noStroke()
		strokeWeight(this.Size * 0.01)
		fill(lineColors[this.data.Line])
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
}