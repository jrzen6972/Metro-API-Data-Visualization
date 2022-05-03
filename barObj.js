class barObj {
	constructor(X, Y) {
		this.X = X
		this.Y = Y
		this.wid = 50
		this.scaling = 9
		this.wid = 12 * this.scaling
		this.rad = 20
	}

	display(data, index, dates, station) {
		this.data = data[index]
		this.date = dates[index]
		this.stationName = station[index]
		this.stationCols = locationDict2.data[this.stationName][1]
		fill(0, 75 + index * 50, 25 + index * 55)
		rect(this.X, this.Y, this.wid, -this.data * this.scaling)

		for (let i = 0; i < this.stationCols.length; i++) {
			fill(lineInfo[this.stationCols[i]][0])
			ellipse(this.X + this.rad / 2, this.Y - this.data * this.scaling +(this.rad/2 + this.rad*i), this.rad)
		}


		fill(255)
		textAlign(CENTER)
		textSize(this.scaling * 3.5)
		text(this.data + "m", this.X + 45, this.Y - this.data * this.scaling - 6)
		textSize(this.scaling * 1.75)
		textAlign(LEFT)
		text(this.date, this.X, this.Y + 25)
	}
}