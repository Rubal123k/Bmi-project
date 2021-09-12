document.getElementById("submit").addEventListener("click", bmiCalculator);
function bmiCalculator(){
    var cm = parseInt(document.getElementById("cm").value);
    var kg = parseFloat(document.getElementById("kg").value);
 
    var bmi;
    var newCM = parseFloat(cm/100);

    bmi = kg/ (newCM * newCM);
    bmi = bmi.toFixed(1);
    // console is not mandatory
    console.log(bmi);

    document.getElementById("result").innerHTML = bmi;
}