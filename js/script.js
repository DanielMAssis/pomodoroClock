let sessionL = document.getElementById('sessionL');
let breakL = document.getElementById('breakL');
let color = document.getElementById('color');

let breakTime = true;
let minutes = sessionL.value;
let seconds = 0;
let cron;

function settSubmit() {
    if(!sessionL.checkValidity() || sessionL.value == ''){
        document.getElementById('errorIn').innerText = sessionL.validationMessage;
    }
    else  {
    }
}

function start(){
    pause();
    cron = setInterval(() => { timer(); }, 300);
}

function pause(){
    clearInterval(cron);
}

function reset(){
    pause();
    minutes = sessionL.value;
    seconds = 0;
    document.getElementById('minute').innerText = returnData(minutes);
    document.getElementById('second').innerText = '00';
}

function timer(){
    seconds--;

    if(seconds < 0){
        seconds = 59;
        minutes--;
    }

    if(minutes < 0 && breakTime){
        document.getElementById('sound').play();
        minutes = breakL.value - 1;
        breakTime = false;
    }
    else if(minutes < 0 && !breakTime){
        document.getElementById('sound').play();
        minutes = sessionL.value - 1;
        breakTime = true;
    }

    document.getElementById('second').innerText = returnData(seconds);
    document.getElementById('minute').innerText = returnData(minutes);
}

function returnData(input){
    return input >= 10 ? input : `0${input}`
}