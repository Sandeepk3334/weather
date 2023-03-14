function displayTime(){
    var time = new Date;
    var hours = time.getHours();
    var minutes  = time.getMinutes();
    var seconds = time.getSeconds();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["Jan","Feb","Mar","April","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    
    var day = weekday[time.getDay()];
    var date = time.getDate();
    var month = months[time.getMonth()];

    

    

    hours = hours < 10 ? "0"+hours : hours;
    minutes = minutes < 10 ? "0"+minutes : minutes;
    seconds = seconds < 10 ? "0"+seconds : seconds;

    var clock = hours + ":" + minutes + ":" + seconds;
    var todayDate = day + ", " + date + " " + month;
    console.log(clock);
    document.getElementById('clock').innerText = clock;
    document.getElementById('todaydate').innerText = todayDate;

}

displayTime();
setInterval(displayTime,1000);