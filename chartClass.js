class chartClass {
	constructor(Xpos, Ypos) {
		this.Xpos = Xpos
		this.Ypos = Ypos
        if(width>height){
		this.Size = width*.15 //200 //random(100,300)
        }else{
            this.Size = width*.25
        }
	}

	display(data, index) {
		//Individual train info
		this.data = data[index]

		//translate(this.Size/2,0)
		
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
			//fill(255, 163, 0) //secondary 1
		} else if (this.data.Min == 'BRD') {
			fill(43, 179, 37)
			//fill(181, 189, 0) //secondary 1
			//fill(103, 130, 58) //secondary 2
		}

		circle(this.Xpos, this.Ypos, this.Size * 0.75) //Conditionally colored inner circle
		fill(0)
		circle(this.Xpos, this.Ypos, this.Size * 0.70) //Black inner circle

		noStroke()
		strokeWeight(this.Size * 0.01)
		fill(lineColors[this.data.Line])
		textSize(this.Size * 0.13) //Textsize and outline scale with size
		text(this.data.Destination, this.Xpos, this.Ypos + this.Size * 0.05) //Text
		noStroke()
		fill(0)
	}
}