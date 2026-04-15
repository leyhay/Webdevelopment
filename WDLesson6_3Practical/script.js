/* Challenges 4,5, and 6 below task you to transform the following parallel arrays into arrays of JSON
let meat_titles = ["Beef Tips","Brisket","Ribeye","Steak"]
let meats = ["beeftips.jpg","brisket.jpg","ribeye.jpg","steak.jpg"];
let meat_prices = [18.99,27.99,21.99,15.99];
let seafood_titles = ["Clams","Crabs","Lobster","Scallop","Shrimp","Tuna"]
let seafood = ["clams.jpg","crabs.jpg","lobster.png","scallops.jpg","shrimp.jpg","tuna.jpg"];
let seafood_prices = [8.99,12.99,30.59,23.95,10.99,5.99];
let dessert_titles = ["Flan","Passion Berry","Oreo Cup"]
let dessert = ["flan.jpg","passionberry.jpeg","oreocup.jpg"];
let dessert_prices = [4.15,3.99,2.99];
*/

// Challenge 4: Create an array of JSON where each JSON contains the title, a link to an image and price for each meat.  
// Solution to Challenge 4 provided below as an example in order to complete Challenges 5 and 6
let meats = [
  { title: "Beef Tips", image: "beeftips.jpg", price: 18.99 },
  { title: "Brisket", image: "brisket.jpg", price: 27.99 },
  { title: "Ribeye", image: "ribeye.jpg", price: 21.99 },
  { title: "Steak", image: "steak.jpg", price: 15.99 }
];
// Challenge 5: Create an array of JSON where each JSON contains the title, a link to an image and price for each seafood.  
let seafoods = [
  { title: "Clams", image: "clams.jpg", price: 18.99 },
  { title: "Crabs", image: "crabs.jpg", price: 27.99 },
  { title: "Lobster", image: "lobster.jpg", price: 21.99 },
  { title: "Shrimp", image: "shrimp.jpg", price: 15.99 },
  { title: "Tuna", image: "tuna.jpg", price: 15.99 },
  { title: "Scallops", image: "scallops.jpg", price: 15.99 }
];

// Challenge 6: Create an array of JSON where each JSON contains the title, a link to an image and price for each dessert.  
let desserts = [
  { title: "Flan", image: "flan.jpg", price: 18.99 },
  { title: "Oreocup", image: "oreocup.jpg", price: 27.99 },
  { title: "Passionberry", image: "passionberry.jpeg", price: 21.99 }
];

function displayMeats(){
  let title = document.getElementById("#title");
  let output = document.getElementById("#items");
  let build = ``;
  for(let i=0; i<meats.length; i+=1){
    let m = meats[i];
    build +=`<div class="container card">
                <h2>${m.title}</h2>
                <img src = "images/${m.image}">
                <p>${m.price}</p>
            </div>`
  }
  /* Challenge 7
     1) Using the array of JSON from Challenge 4, pce cards for all the items.  
     2) Change the title to "Meats".
  */

  output.innerHTML = build;
}

function displaySeafood(){
  let title = document.getElementById("#title");
  let output = document.getElementById("#item");
  let build = ``;
  for(let i=0; i<seafoods.length; i+=1){
    build +=`<div class="container card">
                <h2>seafoods</h2>`
  }
  /* Challenge 8
     1) Using the array of JSON from Challenge 5, produce cards for all the items.  
     2) Change the title to "Seafood".
  */
  output.innerHTML = build;
}

function displayDesserts(){
  let title = document.getElementById("#title");
  let output = document.getElementById("#item");
  let build = ``;
  for(let i=0; i<desserts.length; i+=1){
    build +=`<div class="container card">
                <h2>desserts</h2>`
  }
  /* Challenge 9
     1) Using the array of JSON from Challenge 6, produce cards for all the items.  
     2) Change the title to "Desserts".
  */

  output.innerHTML = build;
}