class barObj {
	constructor(X, Y) {
		this.X = X
		this.Y = Y
		this.wid = 50
		this.scaling = 15
		this.wid = 12 * this.scaling
		this.rad = 20
	}

	display(data, index, dates, station,fillArr) {
		this.data = data[index]
		this.date = dates[index]
		this.stationName = station[index]
		this.stationCols = locationDict2.data[this.stationName][1]
		// colorMode(HEX)
		fill(fillArr[index])
		rect(this.X, this.Y, this.wid, -this.data * this.scaling,10,15,10,20)

		for (let i = 0; i < this.stationCols.length; i++) {
			fill(lineInfo[this.stationCols[i]][0])
			ellipse(this.X + this.rad / 2, this.Y - this.data * this.scaling +(this.rad/2 + this.rad*i), this.rad)
		}


		fill(255)
		textAlign(CENTER)
		textSize(9 * 3.5)
		text(this.data, this.X + 45, this.Y - this.data * this.scaling - 6)
		textSize(9 * 1.75)
		textAlign(LEFT)
		text(this.date, this.X, this.Y + 25)
	}
}


function avgScale(){
	textSize(16)
	textAlign(RIGHT)
	for(let i =0;i<5;i++){
		text(i*5,width*.1375,height*.825-((height*.0675)*i))
	}
	stroke(255)
	line(width*.1385,height*.825,width*.1385,height*.545)
	noStroke()
	textAlign(RIGHT)
	text("Avg Wait\n(Min)",width*.125,height*.675)

	textAlign(LEFT)

}