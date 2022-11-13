console.log("JavaScript loaded")
const temps = document.querySelectorAll(".temps");

function remove_cookie_div() {
    const cookie_div = document.getElementById("cookie_div");
    cookie_div.remove();
}
function convert_temperature(element) {
    // const temps = document.querySelectorAll(".temps");
    for (let i = 0; i < temps.length; i++) {
        let temp = temps[i].innerText;
        temp=Number(temp.slice(0,temp.length -1))
        if (element.value == "°F"){
            temp = Math.round(temp*9/5+32);
        } else {
            temp = Math.round((temp-32)*5/9);
        }
        temps[i].innerText = temp+"°"
    } 
}

async function get_city(city) {
    const selected = document.getElementById("selected");
    // console.log("A",selected.value);
    let units;
    if (selected.value=="°F"){
        units="imperial";
    } else {
        units="metric";
    }
    // console.log(units)
    alert(`Loading weather report for ${city}`);
    if (city == "Chicago"){
        lat_lon = "lat=41.88&lon=-87.62";
    } else if (city == "Burbank"){
        lat_lon = "lat=34.18&lon=-118.30";
    } else {
        lat_lon = "lat=32.77&lon=-96.80";
    }
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?${lat_lon}&units=${units}&exclude=hourly,minutely,current&APPID=e5236885b31160e43d9955109c25846c`);
    const weather = await response.json();
    console.log(weather);
    console.log(weather.daily[0].temp.max);
    console.log(weather.daily[0].temp.min);
    // console.log(weather.city.name);
    // console.log(weather.list[0].weather);
}
// Dallas
// lat=32.7668
// lon=-96.7836