class circ {
	constructor(x, y, Xc, Yc, name) {
		angleMode(DEGREES)
		this.X = x - Xc;
		this.Y = y - Yc;
		this.Xc = Xc;
		this.Yc = Yc;

		this.ang = atan2(this.X, this.Y)
		this.dist = dist(this.X + this.Xc, this.Y + this.Yc, this.Xc, this.Yc)

		this.name = name //name of station
		this.col = locationDict2.data[this.name] //gets line routes and location codes, when given a station name
		this.HL = false //base highlight
		this.altHL = false //alt click highlight
		this.Size = 20
	}

	shift() { //move the dots
		if (keyIsDown(38)) { //up arrow
			this.Y -= 10
		}
		if (keyIsDown(40)) { //down arrow
			this.Y += 10
		}
		if (keyIsDown(37)) { //left arrow
			this.X -= 10
		}
		if (keyIsDown(39)) { //right arrow
			this.X += 10
		}
	}

	// show() { //show info
	// 	angleMode(RADIANS)
	// 	let lastAngle = 0;
	// 	for (let i = 0; i < this.col[1].length; i++) {
	// 		if (this.altHL) {
	// 			stroke("cyan")
	// 		} else if (this.HL) {
	// 			stroke("gold")
	// 		} else {
	// 			noStroke()
	// 		}
	// 		fill(lineInfo[this.col[1][i]]);
	// 		arc(this.X + this.Xc, this.Y + this.Yc, this.Size, this.Size, lastAngle,
	// 			lastAngle + radians(360 / this.col[1].length)
	// 		);
	// 		lastAngle += radians(360 / this.col[1].length);
	// 	}
	// 	angleMode(DEGREES)
	// }

	showAng(Scale) {
		fill('yellow');
		this.Xt = this.Xc + Scale * this.dist * sin(this.ang);
		this.Yt = this.Yc + Scale * this.dist * cos(this.ang);
        this.Size2 = this.Size*1-Scale
		angleMode(RADIANS)
		let lastAngle = 0;
		for (let i = 0; i < this.col[1].length; i++) {
			if (this.HL1) {
				stroke("cyan")
			} else if (this.HL2) {
				stroke("gold")
			} else if (this.HL3){
				stroke('pink')
			} else if (this.HL4){
                stroke('brown')
            } else if (this.HL5){
                stroke('lime')
            }else{
                noStroke()
            }
			fill(lineInfo[this.col[1][i]][0]);
			arc(this.Xt, this.Yt, this.Size, this.Size, lastAngle,
				lastAngle + radians(360 / this.col[1].length)
			);
			lastAngle += radians(360 / this.col[1].length);
		}
        if(Scale>2){
            fill(255)
            text(this.name,this.Xt,this.Yt)
        }
		angleMode(DEGREES)
}

highlight(X, Y) {
    if(keyIsDown(49)){ //alt click
		if ((dist(X, Y, this.Xt, this.Yt) < this.Size / 2)) {
			this.HL1 = true
		} else {
			this.HL1 = false
        }
    }
    if(keyIsDown(50)){
		if ((dist(X, Y, this.Xt, this.Yt) < this.Size / 2)) { //base click
            this.HL2 = true
        } else { 
            this.HL2 = false
        }
    }
    if(keyIsDown(51)){
		if ((dist(X, Y, this.Xt, this.Yt) < this.Size / 2)) { //base click
            this.HL3 = true
        } else { 
            this.HL3 = false
        }
    }
    if(keyIsDown(52)){
		if ((dist(X, Y, this.Xt, this.Yt) < this.Size / 2)) { //base click
            this.HL4 = true
        } else { 
            this.HL4 = false
        }
    }
    if(keyIsDown(53)){
		if ((dist(X, Y, this.Xt, this.Yt) < this.Size / 2)) { //base click
            this.HL5 = true
        } else { 
            this.HL5 = false
        }
    }
        
    }


}