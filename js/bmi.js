function computeBMI() {
    // user inputs
    var height = Number(document.getElementById("height").value);

    var weight = Number(document.getElementById("weight").value);




    var BMI = Math.round(weight / Math.pow(height, 2) * 10000);

    //Display result of calculation
    document.getElementById("output").innerText = Math.round(BMI * 100) / 100;

    var output = Math.round(BMI * 100) / 100
    if (output < 18.5)
        document.getElementById("comment").innerText = "  น้ำหนักน้อย";
    else if (output >= 18.5 && output <= 25)
        document.getElementById("comment").innerText = "ปกติ";
    else if (output >= 25 && output <= 30)
        document.getElementById("comment").innerText = "น้ำหนักเกิน";
    else if (output > 30)
        document.getElementById("comment").innerText = "โรคอ้วน";
    // document.getElementById("answer").value = output; 
}
function goBacktohome() {
    window.location.href = "index.html";
}
