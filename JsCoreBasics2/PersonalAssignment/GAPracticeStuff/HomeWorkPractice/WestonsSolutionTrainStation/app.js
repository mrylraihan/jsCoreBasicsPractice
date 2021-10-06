const subwayLines ={
    Red : ['South Station','Park Street','Kendall','Central','Harvard','Porter','Davis','Alewife'],
    Green :['Government Center','Park Street','Boylston','Arlington','Copley','Hynes','Kenmore'],
    Orange : ['North Station','Haymarket','Park Street','State','Downtown Crossing','Chinatown','Back Bay','Forest Hills']

}



const samelineStops = (line, start, end)=>{
const startIndex = subwayLines[line].indexOf(start)
const endIndex = subwayLines[line].indexOf(end)

return Math.abs(startIndex - endIndex);
}

function stopBetweenStations(startLine, startStation, endLine , endStation) {
    
}

function hello() {
    console.log('Hello!');
}


export{
    hello,
    stopBetweenStations
}
