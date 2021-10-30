let sessionL = document.getElementById('sessionL');
let breakL = document.getElementById('breakL');
let color = document.getElementById('color');

function settSubmit() {
    if(!sessionL.checkValidity() || sessionL.value == ''){
        document.getElementById('errorIn').innerText = sessionL.validationMessage;
    }
    else  {
        
    }
    console.log(sessionL.value);
    console.log(breakL.value);
    console.log(color.value);
}

console.log(document.getElementById('sessionL').value);
console.log(document.getElementById('breakL').value);
console.log(document.getElementById('color').value);