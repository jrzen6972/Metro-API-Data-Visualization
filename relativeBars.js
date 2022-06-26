class relObj {
	constructor(X, Y,fillArr,fillArr2) {
		this.X = X
		this.Y = Y
		this.wid = 75
		this.scaling = 9
        this.colArr1 = fillArr
        this.colArr2 = fillArr2
		// this.wid = 12 * this.scaling
		this.rad = 20
	}

	display(index,dataArr,selectedArr,selectID) {
        this.data = dataArr
        let lastChunk = 0
        let prevVal = 0
		
        if(dataArr.length != 0){
            this.data = selectedArr[index]
            this.col = this.data[1]
            this.data = this.data[0]
            this.fares = [this.data.RailFare["PeakTime"],this.data.RailFare["OffPeakTime"],this.data.RailFare["SeniorDisabled"]]
            this.fares.reverse()
            textSize(15)

            for(let i = 0; i<3;i++){
                fill(this.colArr1[i])
                //  prevVal = this.fares[i] * 20
                // rect(this.X+lastChunk, this.Y,prevVal,this.wid/2,5,5,5,5)
                // lastChunk += prevVal + 3

                this.scaled = (this.fares[i] * (width / 40)) - lastChunk
				rect(this.X + lastChunk, this.Y, this.scaled, this.wid / 2, 5, 5, 5, 5)
				lastChunk += this.scaled + 2
            }
            noStroke(0)

            fill(this.colArr2[index])
            this.indexTrue = index+1
            // this.name = objs[]

            text("Selected "+ this.indexTrue + ": " + objs[selectID[index]].name,this.X,this.Y-this.scaling)
            fill(255)
            text(this.data.RailTime,this.X-this.wid/4,this.Y+this.wid/4)
        }
	}
}




let relativeArr = []
let filteredRelative = []
let selectedArr = []

function setUpRelative(){
    for (let i = 0; i < 5; i++) {
		relativeArr[i] = new relObj(width*.82,height * .52 + 75*i,hexArr2,hexArr3)
	}

}

function drawRelative(){
    for(let i = 0; i<relativeArr.length;i++){
        relativeArr[i].display(i,filteredRelative,selectedArr,selectedNames,hexArr2,hexArr3)
    }
    drawRelativeKey(hexArr2)
}

function drawRelativeKey(fillArr){
    fills = fillArr
    textArr = ["Peak Time ","Off-Peak Time ","Senior/Disabled"]
    textArr.reverse()
    fill(fills[0])
    text(textArr[0],width*.82,height*.93)
    fill(fills[1])
    text(textArr[1],width*.82+textWidth(textArr[0]),height*.93)
    fill(fills[2])
    text(textArr[2],width*.82+textWidth(textArr[0])+textWidth(textArr[1]),height*.93)

    fill(255)
    stroke(255)
    // line(width*.82, height*.85,width*.98,height*.85)
    // noStroke()
    // text("Fare Prices $", width*.875, height*.895)
    // for(let i = 0;i<6;i++){
    //     text(i+4,width*.82+((width*.03)*i),height*.87)
    // }

    line(width * .82, height * .85, width * .98, height * .85)
	noStroke()
	text("Fare Prices $", width * .875, height * .89)
	for (let i = 0; i < 7; i++) {
		text(i, width * 0.82 + ((width / 40) * i), height * .873)
	}
}