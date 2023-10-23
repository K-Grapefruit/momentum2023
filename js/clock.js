const clock = document.querySelector("#clock");

const getClock = () => {
    const date = new Date();

    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
//2초마다 실행
setInterval(getClock,1000);

//2초 뒤 실행(1번만)
//setTimeout(repeat,2000);