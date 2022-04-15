class barObj {
	constructor(X, Y) {
		this.X = X
		this.Y = Y
		this.wid = 50
		this.scaling = 9
		this.wid = 12 * this.scaling

	}


	display(data, index, dates) {
		this.data = data[index]
        this.date = dates[index]

		fill(0, 155 + index * 25, 255)
		rect(this.X, this.Y, this.wid, -this.data * this.scaling)

		fill(255)
		textSize(this.scaling*4)
		text(this.data, this.X+35, this.Y - this.data * this.scaling - 6)
        textSize(this.scaling*2)
        text(this.date, this.X+35, this.Y - 50)
	}
}