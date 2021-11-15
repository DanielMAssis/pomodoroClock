let sessionL = document.getElementById('sessionL');
let breakL = document.getElementById('breakL');
let color = document.getElementById('color');
let bar = document.getElementsByClassName('color');
let alertS = document.getElementById('alert');

let breakTime = true;
let minutes = sessionL.value;
let seconds = 0;
let cron;

function settings(x){
    reset();

    if(!x){
        if(!sessionL.checkValidity() || sessionL.value == '')
            document.getElementById('errorIn').innerText = 'Apenas valores entre 1 e 60.';
        else
            document.getElementById('settings').style.display = 'none';
    }
    else {
        document.getElementById('settings').style.display = 'flex';
        document.getElementById('errorIn').innerText = '';
    }
}

function settSubmit() {
    if(!sessionL.checkValidity() || sessionL.value == ''){
        document.getElementById('errorIn').innerText = 'Apenas valores entre 1 e 60.';
    }
    else  {
        reset();
        minutes = sessionL.value;
        document.getElementById('minute').innerText = returnData(minutes);
        document.getElementById('pomodoroClock').style.filter = 'drop-shadow(0px 0px 10px'+ color.value + ')';
        document.getElementById('settings').style.display = 'none';
        document.getElementsByClassName('color')[0].style.stroke = color.value;
        z = minutes * 60;
    }
}

function start(){
    pause();
    cron = setInterval(() => { timer(); }, 1000);
    document.getElementsByClassName("fa-pause")[0].style.display = 'inline';
    document.getElementsByClassName("fa-play")[0].style.display = 'none';
}

function pause(){
    clearInterval(cron);
    document.getElementsByClassName("fa-pause")[0].style.display = 'none';
    document.getElementsByClassName("fa-play")[0].style.display = 'inline';
}

function reset(){
    pause();
    x, y = 0;
    minutes = sessionL.value;
    z = minutes * 60;
    seconds = 0;
    document.getElementById('minute').innerText = returnData(minutes);
    document.getElementById('second').innerText = '00';
    bar[0].style.strokeDashoffset = '0';
}

let x = 0;
let y = 0;
let z = minutes * 60;
function animation(){
    x = 1165 / z;
    y = y + x;
    bar[0].style.strokeDashoffset = y;
}

function timer(){
    seconds--;
    
    animation();

    if(seconds < 0){
        seconds = 59;
        minutes--;
    }

    if(minutes < 0 && breakTime){
        alertS.checked ? document.getElementById('sound').play() : false;
        minutes = breakL.value - 1;
        breakTime = false;
        bar[0].style.strokeDashoffset = '0';
        x, y = 0;
        z = breakL.value * 60;
    }
    else if(minutes < 0 && !breakTime){
        alertS.checked ? document.getElementById('sound').play() : false;
        minutes = sessionL.value - 1;
        breakTime = true;
        bar[0].style.strokeDashoffset = '0';
        x, y = 0;
        z = sessionL.value * 60;
    }

    document.getElementById('second').innerText = returnData(seconds);
    document.getElementById('minute').innerText = returnData(minutes);
}

function returnData(input){
    return input >= 10 ? input : `0${input}`
}
