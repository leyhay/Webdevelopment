/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
function bmi(){
       let w = parseFloat(document.getElementById("weight").value);
       let h = parseFloat(document.getElementById("height").value);
       let output = document.getElementById("output");
       let msg = "";
       
       let BMI = 703*(w/h);
       if(BMI >= 30.0){
              filename = "obeseweight.png";
              msg="Obese";
       }
       else if(BMI >= 25.0 && BMI <= 29.9){
              filename = "overweight.png"
              msg="Overweight";
       }
       else if(BMI >= 18.5 && BMI<=24.9){
              filename = "healthyweight.png"
              msg="Healthy";
       }
       else{
              filename = "underweight.png"
              msg="Underweight";
       }
       output.innerHTML = `Your bmi is ${BMI} <img height="500px"src = "${filename}">`
}
/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/

