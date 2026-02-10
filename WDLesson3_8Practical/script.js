
//  For each challenge fix the error and explain the correction in the comment


/* Challenge 4: Does the function name match the event handler referenced in the event listener?
no v is uppercased */
function volume(){

  /* Challenge 5: Are there any errors in retrieving and parsing the information from the text inputs?
  forgot the Id in get.ElementById
  b is lowercase */
  let r = parseInt(document.getElementById("r").value);
  let height = parseInt(document.getElementById("height").value);

  /* Challenge 6: Does the variable output correctly create a reference to the output container? 
  has dot value*/
  let output = document.getElementById("output");

  /* Challenge 7: Is the following calculation for volume of a cylinder correct? 
  did the math wrong and wrong variable
  m in Math wasnt uppercased*/
  let v = Math.PI * Math.pow(r,2) * height;

  /* Challenge 8: Are there any errors in displaying the output? 
  weird output*/
  output.innerHTML = "Volume is " + v;

}