
let hourHand = document.querySelector('.hour-hand');
let minHand = document.querySelector('.min-hand');
let secHand = document.querySelector('.sec-hand');

function startClock(){
    var currentDate = new Date();
    var sec = currentDate.getSeconds();
    var secdeg = ((sec/ 60) * 360) - 90;

    var min = currentDate.getMinutes();
    var mindeg = ((min/ 60)* 360) + ((sec/60)*6) - 90 ;

    var hour = currentDate.getHours();
    var hourdeg = ((hour/ 12)* 360) + ((min/60)*30) - 90;

    hourHand.style.transform = `rotate(${hourdeg}deg)`;
    minHand.style.transform = `rotate(${mindeg}deg)`;
    secHand.style.transform = `rotate(${secdeg}deg)`;
    console.log(hour , min , sec);
}


function runClock(){
    setInterval(startClock , 500);
}
startClock();
runClock();


