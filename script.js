const myLabel = document.getElementById("clock");
const calendary = document.getElementById("date");
const img = document.getElementById("img");
update()
setInterval(update, 1000);

function update(){
    let date = new Date();
    myLabel.innerHTML =  ` &#9200 ${formatTime(date)}`;
    calendary.innerHTML = ` &#128467 ${formatDate(date)}`

    function formatDate(date){
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();

        return `${day} / ${month} / ${year}`;
    }

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours >= 12 ? "pm" : "am";

        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);
        return `${hours} : ${minutes} : ${seconds} ${amOrPm}`
    }

    function formatZeroes(time){
        time = time.toString();
        return time.lenght < 2 ? "0" + time : time;
    }
} 