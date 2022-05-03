class relObj {
	constructor(X, Y) {
		this.X = X
		this.Y = Y
		this.wid = 75
		this.scaling = 9
		// this.wid = 12 * this.scaling
		this.rad = 20
	}

	display(index,dataArr,selectedArr) {
        this.data = dataArr
        let lastChunk = 0
        let prevVal = 0
		
        if(dataArr.length != 0){
            this.data = selectedArr[index]
            this.col = this.data[1]
            this.data = this.data[0]
            this.fares = [this.data.RailFare["PeakTime"],this.data.RailFare["OffPeakTime"],this.data.RailFare["SeniorDisabled"]]
            textSize(15)
            fill(this.col)
            text("",this.X,this.Y)

            for(let i = 0; i<3;i++){
                fill(this.col)
                if(this.fares[i]==null){
                    prevVal = 1
                }else{
                    prevVal = this.fares[i] * 20
                }
                rect(this.X+lastChunk, this.Y,prevVal,this.wid/2)
                lastChunk += prevVal
            }
            stroke(0)
            // text(this.data.RailTime,this.X,this.Y)
        }
        // print(this.data)

	}
}

let relativeArr = []
let filteredRelative = []
let selectedArr = []

function setUpRelative(){
    for (let i = 0; i < 5; i++) {
		relativeArr[i] = new relObj(width*.8,height * .5 + 75*i)
	}

}

function drawRelative(){
    for(let i = 0; i<relativeArr.length;i++){
        relativeArr[i].display(i,filteredRelative,selectedArr)
    }
}