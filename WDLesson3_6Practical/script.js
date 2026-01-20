// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function Average(){
    let n1 = parseFloat(document.getElementById("num1"));
    let n2 = parseFloat(document.getElementById("num2"));
    let n3 = parseFloat(document.getElementById("num3"));
    let output = document.getElementById("outputa");

    let result = (n1 + n2 + n3)/3;
    output.innerHTML = "Average is" + result;
}

// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function Slope(){
    let y1 = parseFloat(document.getElementById("y1"));
    let y2 = parseFloat(document.getElementById("y2"));
    let x2 = parseFloat(document.getElementById("x2"));
    let x1 = parseFloat(document.getElementById("x1"));
    let output = document.getElementById("outputs");

    let result1 = (y2 - y1)/(x2 - x1);
    output.innerHTML = "Slope is" + result1;
}
// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.
function BMI(){
    let w = parseFloat(document.getElementById("weight"));
    let h = parseFloat(document.getElementById("height"));
    let output = document.getElementById("outputb");

    let result2 = (w/h*h)*703;
    output.innerHTML = "BMI is" + result2;
}