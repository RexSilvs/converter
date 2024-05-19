function convert(){
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var temperature = parseFloat(document.getElementById('temp').value)
    
    var convertedValue;
    var resultUnit;

    switch(fromUnit){
        case 'C':
            if(toUnit === 'F'){
                convertedValue = (temperature -32)* 5/9;
                resultUnit = 'F';
            }
            else{
                convertedValue = temperature;
                resultUnit = 'C';
            }
            break;
        case 'F':
            if(toUnit === 'C'){
                convertedValue = (temperature -32)* 5/9;
                resultUnit = 'C';
            }
            else{
                convertedValue = temperature;
                resultUnit = 'F';
            }
            document.getElementById('result').value = convertedValue.toFixed(2) = ' ' + resultUnit;
    }
    
}