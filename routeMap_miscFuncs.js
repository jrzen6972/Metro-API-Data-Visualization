function chooseTrainLine() {
    let val = sel.value();
    if (val == 'Blue Line') {
        pathData = loadJSON(pathUrl_BL);	
    }
}