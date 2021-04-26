var intervalID = setInterval(getDate, 500);

function getDate(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}