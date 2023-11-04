const SuccessWeather = (info) => {
   const API_KEY = "9bd0ff20e935422ed58f91ad13a49da0"
   console.log(info);
   // 위도 경도 받아오기
    const lat = info.coords.latitude;
    const lon = info.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    fetch(url).then(response=>response.json()).then(data=>{
        console.log(data);
        const cityname = document.querySelector("#weather span:first-child");
        const now_weather = document.querySelector("#weather span:last-child");

        cityname.innerText = `CITY - ${data.name}`;
        now_weather.innerText = `${data.weather[0].main}`;
    })
}

const ErrorWeather = () =>{
    console.log("error");
}

navigator.geolocation.getCurrentPosition(SuccessWeather , ErrorWeather);