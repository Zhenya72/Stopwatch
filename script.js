
const hTime=document.getElementById("h_time")
const mTime=document.getElementById("m_time")
const sTime=document.getElementById("s_time")
const startBtn=document.getElementById("start")
const pauseStartBtn=document.getElementById("pause_start")
const pauseStopBtn=document.getElementById("pause_stop")
const stopBtn=document.getElementById("stop")
let sec=0, min=0, hour=0
let interval

pauseStartBtn.style.display="none"

function stepTime(){
    interval = setInterval(() => {
        sec++
        if (sec<=9){
            sTime.textContent="0"+sec
        } else{
            sTime.textContent=sec
        }
        if (sec===60){
            min++
            sec=0
            if (min<=9){
                mTime.textContent="0"+min
            } else{
                mTime.textContent=min
            }
            if (min===60){
                hour++
                min=0
                if (hour<=9){
                    hTime.textContent="0"+hour
                } else{
                    hTime.textContent=hour
                }
            }
        }
    }, 1000);
}


startBtn.onclick=function(){
    startBtn.className="btn btn-warning disabled"
    pauseStopBtn.className="btn btn-warning"
    stopBtn.className="btn btn-warning"
    stepTime()
}


pauseStopBtn.onclick=function(){
    clearInterval(interval)    
    pauseStopBtn.style.display="none"
    pauseStartBtn.style.display="block"
    startBtn.className="btn btn-warning disabled"
    pauseStartBtn.className="btn btn-warning disabled"
    pauseStartBtn.className="btn btn-warning"
}

pauseStartBtn.onclick=function(){
    stepTime()  
    pauseStopBtn.style.display="block"
    pauseStartBtn.style.display="none"
    startBtn.className="btn btn-warning disabled"
    pauseStartBtn.className="btn btn-warning disabled"
    pauseStopBtn.className="btn btn-warning"
}

stopBtn.onclick=function(){
    clearInterval(interval)
    sec=0
    min=0
    hour=0
    sTime.textContent="0"+sec
    mTime.textContent="0"+min
    hTime.textContent="0"+hour
    startBtn.className="btn btn-warning"
    pauseStartBtn.className="btn btn-warning disabled"
    pauseStopBtn.className="btn btn-warning disabled"
    stopBtn.className="btn btn-warning disabled"
    pauseStopBtn.style.display="block"
    pauseStartBtn.style.display="none"
}

