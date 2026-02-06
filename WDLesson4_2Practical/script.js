// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element

  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/
function area(){
  let l = parseFloat(document.getElementById("l").value);
  let w = parseFloat(document.getElementById("w").value);
  let output = document.getElementById("output");
  let msg = "";
  let a = l*w;
  if(l <= 0 || w <= 0){
    msg = "Inappropriate measurement";
  }
  else{
    msg = `Area is ${a}`;
  }
  output.innerHTML = msg;
}
/* Challenge 2:  Create the function for Challenge 1 scenario */



/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet(){
  let animal = document.getElementById("animal").value;
  let emotion = document.getElementById("emotion").value;
  let output = document.getElementById("output");
  let pic = "";

  if(animal == "Bear" && emotion == "Sad"){
    pic = "sadBear.jpg";
  }
  if(animal == "Bear" && emotion == "Funny"){
    pic = "funnyBear.jpg";
  }
  if(animal == "Dog" && emotion == "Sad"){
    pic = "sadDog.jpg";
  }
  if(animal == "Dog" && emotion == "Funny"){
    pic = "funnyDog.jpg";
  }
  if(animal == "Cat" && emotion == "Sad"){
    pic = "sadCat.jpg";
  }
  if(animal == "Cat" && emotion == "Funny"){
    pic = "funnyCat.jpg";
  }
  output.innerHTML = `<img src = "${pic}">`
}