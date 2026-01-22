/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function recArea(){
      let l = document.getElementById("num1");
      let w = document.getElementById("num2");
      let output = document.getElementById("output");

      let result=l.value * w.value;
      output.innerHTML = result;
}

function recPerimeter(){
      let l = document.getElementById("num1");
      let w = document.getElementById("num2");
      let output = document.getElementById("output");

      let result1= parseFloat(l.value) + parseFloat(w.value) + parseFloat(l.value) + parseFloat(w.value);
      output.innerHTML = result1;
}


/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea(){
      let r = document.getElementById("rad").value;
      let output = document.getElementById("output");

      let result2 = pi * parseFloat(r) * parseFloat(r);
      output.innerHTML = "Area is " + result2;
}

function cirPerimeter(){
      let r = document.getElementById("rad").value;
      let output = document.getElementById("output");

      let result3 = 2*r*pi;
      output.innerHTML = "Circumfrence is " + result3;
}

/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){

}

function triPerimeter(){

}