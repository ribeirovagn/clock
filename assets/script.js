const hours = document.querySelector(".hour");
const minutes = document.querySelector(".minute");
const seconds = document.querySelector(".second");

const updateTime = () => {
    const date = new Date();

    let secToDeg = (date.getSeconds() / 60) * 360;
    let minToDeg = (date.getMinutes() / 60) * 360;
    let hourToDeg = (date.getHours() / 12) * 360;

    seconds.style.transform = `rotate(${secToDeg}deg)`;
    minutes.style.transform = `rotate(${minToDeg}deg)`;
    hours.style.transform = `rotate(${hourToDeg}deg)`;
}

setInterval(updateTime, 1000);
updateTime();