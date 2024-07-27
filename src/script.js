document.addEventListener('DOMContentLoaded', function () {
    console.log('document is fully ready');
    const display = document.getElementById('answer');
    const buttons = document.getElementsByClassName('btn');

    let currentValue = "";

    function evaluateResult() {
       console.log('currentValue:', currentValue)
       const convertValue = currentValue
       .replace("x","*")
       .replace("÷","/")
       .replace("%","*0.01");

       console.log('convertedValue',convertValue)
       const result = eval(convertValue);
       currentValue = result.toString();
       display.value = currentValue;
    }

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {
            const value = button.innerText;

            if (value == "AC") {
                currentValue = "";
                display.value = currentValue;
            } else if (value == "="){
               evaluateResult(); 
            } else {
                currentValue += value;
                console.log('currenValue:', currentValue);
                display.value = currentValue;
            }


        })
    }
});