
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const hour = document.getElementById('hour');

//getting Date in seconds
function setDate(){
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    hour.innerHTML = `${hours}:${minutes}:${seconds}`;

    //turn seconds into  degrees to rotate the hands.
    const secondsDeg = ((seconds / 60 ) * 360) + 90;
    console.log(seconds)
    
    //turn minutes into degrees.
    const minuteDeg = ((minutes / 60 ) * 360) + 90;

    //turn hours into degrees
    const hourDeg = (( hours/12 ) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

}

//make the function run every second
setInterval(setDate, 1000);