
let display = document.getElementById("displayTimer");
let startbtn = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
    let minutes = 0;
    let hours = 0;
    let seconds = 0;
    let timer = null;

    function startTimer(){
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
        let h = hours<10? "0" + hours:hours;
        let m = minutes<10? "0" + minutes:minutes;
        let s = seconds<10? "0" + seconds:seconds;
        display.innerHTML = h + ":" + m + ":" + s;
    }
    function watchStart(){
        if(timer !== null){
          clearInterval(timer);
        }
       timer = setInterval(startTimer, 1000);

    }
    function stopTimer(){
        clearInterval(timer);
    }
    function resetTimer(){
        clearInterval(timer);
        minutes = 0;
        hours = 0;
        seconds = 0;

        display.innerHTML ="00:00:00";
    }





