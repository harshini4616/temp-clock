
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
// console.log(date);

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
// console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

function runTheclock(){

    hrPosition = hrPosition + (3/360);
    minPosition = minPosition + (6/60);
    secPosition = secPosition + 6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";


}

var interval = setInterval(runTheclock,1000);

/*Digital clock part*/
function showTime(){
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var session = "AM";

    if(hr == 0){
        hr = 12;
    }
    if(hr > 12){
        hr = hr - 12;
        session = "PM";

    }

    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    var time = hr + ":" + min + ":" + sec + " " + session;
    document.getElementById("digitalClock").innerText = time;
    document.getElementById("digitalClock").textContent = time;

    document.getElementById("date").innerText = date;
    document.getElementById("date").textContent = date;

    setTimeout(showTime,1000);


};
const key = "3f847a677204aec2880610d01aabac3b";
const Url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const search = document.getElementById('city');
const but = document.getElementById('but');



async function checkWeather() {
    const cbh = search.value;
    const responce = await fetch(Url + `${cbh} ` + `&appid=${key}`);
    var data = await responce.json();
    console.log(data);
    document.getElementById('city2').innerHTML = data.name;
    document.getElementById('temp').innerHTML = Math.round(data.main.temp) + " " + "°C";
    document.getElementById('humidity').innerHTML = "Humidity : " + data.main.humidity + "%";
    document.getElementById('wind').innerHTML = "wind-speed : " + data.wind.speed + " " + "Km/h";





}
but.addEventListener("click", () => {
    checkWeather();
})






showTime();
/*Digital clock part*/
// setClock();
