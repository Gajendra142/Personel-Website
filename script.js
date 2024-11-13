let time = document.querySelector(".time");

// let hour = 0;
let minute = 0;
let second = 0;
let count =0;
let timer;
let pauseBtn = document.querySelector(".resume")
function stopWatch(){
    if(count===100){
        second++;
        count=0;
    }
    if(second===60){
        minute++;
        second= 0;
    }
    let finalTime = (minute<10 ?"0"+minute : minute) +":" +
        (second<10 ? "0"+second : second) +":"+
        (count<10 ? "0"+count :count);

    time.innerText = finalTime;
    count++;

}
function startStopWatch(){
    if(!timer)        // to check whether the timer is running already or not
    timer = setInterval(stopWatch,10);
}

function resetStopWatch(){
    minute =0;
    second = 0;
    count=0;
    if( pauseBtn.innerText === "Resume"){
        pauseBtn.innerText = "Pause"
    }
    clearInterval(timer);
    timer = null;
    stopWatch();

    // time.innerText = "00:00:00"; // to rest the display
}

function pauseStopWatch(){
   
   if(pauseBtn.innerText ==="Pause"&& !timer===false){
        pauseBtn.innerText ="Resume";
        clearInterval(timer);
        timer=null;
   }
   else if(pauseBtn.innerText === "Resume"){
        pauseBtn.innerText = "Pause";
        if(!timer){
            timer = setInterval(stopWatch,10);
        }
   }

}