const clock = document.querySelector("#clock");

const getClock = () => {
    const date = new Date();

    //최소 길이 2글자 이상으로 만들기
    const Hours = String(date.getHours()).padStart(2,"0");
    const Minutes = String(date.getMinutes()).padStart(2,"0");
    const Seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${Hours}:${Minutes}:${Seconds}`;
}

getClock();
//2초마다 실행
setInterval(getClock,1000);

//2초 뒤 실행(1번만)
//setTimeout(repeat,2000);