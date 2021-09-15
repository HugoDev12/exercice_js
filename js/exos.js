//exo 1

/* if (true) {
    console.log("Condition is working !");
  }
 */
// parce que la condition est remplie, elle est "vraie" alors le programme continue

/* if (false) {
    console.log("Condition is working !");
  }
  else {
    console.log("Condition is not working !");
  } */

// rien ne s'affiche, car la condition est "fausse" alors le programme s'arrête
// puisque la condition n'est pas remplie, le programme passe au else

/* if (false === false) {
    console.log("Condition is working !");
  } */

// la condition est vraie alors la consolelog s'affiche. Une condition vraie permet d'afficher la suite.

//exo 2

/* let content = 123;
if (content) {
    console.log("Condition is OK");
  }
  else {
    console.log("Condition is KO");
  } */

// Condition is KO.
// Condition is OK. Oui car une condition vraie est correctement remplie
// Condition is KO. La condition est fausse ainsi le programme passe au else
// Condition is OK. Elle est bien vérifiée parce que la valeur Text permet de la remplir
// Condition is OK. Elle est bien vérifiée parce que le chiffre 123 permet de la remplir

//exo 3

/* let price = "forty five";
if (price === 45) {
    console.log("The price is a number");
  }
  else if (price == 45) {
    console.log("The price is a string");
  }
  else {
    console.log("The price is something else");
  } */
  // The price is a number. La condition de savoir si price est strictement égal à 45 est vraie.
  // The price is a string. Le signe == indique ainsi que le chiffre 45 est égal au chiffre 45 dans une String.
  // The price is something else. fory five != 45 donc le dernier else rentre en jeu.

//exo 4

/* let age = 32;

if (age >= 18){
    console.log("Entry allowed");
}
else {console.log("Entry not allowed");} */

//exo 5

/* var store = ["Walmart", "Colorado", "South-Park", 483,];

if (store[0] === "Walmart" && store[2] === "South-Park") {
  console.log("The Walmart in South-Park has " + store[3] + " employes");
}
else if (store[0] === "Walmart" && store[2] != "South-Park" && store[1] === "Colorado") {
  console.log("Hum this is an other Walmart from Colorado");
}
else if (store[0] === "Walmar" && store[1] === "Colorade") {
  console.log("Too bad this is just a Walmart");
}
else {
  console.log("test");} */

//exo 6
/* 
let student = {
    "Name" : "John Doe",
    "Grade" : 15
} */
/*
if (student.Grade < 10){
    console.log("Recalé");
} 
else if (student.Grade <= 12){
    console.log("Passable");
}
else if (student.Grade <= 14){
    console.log("Moyen");
}
else if (student.Grade <= 16){
    console.log("Bien");
}
else {
    console.log("Très bien");
}
 */
/* switch (true) {
    case student.Grade < 10 :
        console.log("Recalé");
        break;
    case student.Grade <= 12 :
        console.log("Passable");
        break;
    case student.Grade <= 14 :
        console.log("Moyen");
        break;
    case student.Grade <= 16 :
         console.log("Bien");
         break;
    default :
        console.log(student.Grade);
} */




//exo 7

/* let meal = {
    "foodType" : "meat",
    "cookedAt" : 80,
    "temperature" : 70
}

if (meal.temperature === meal.cookedAt){
    meal["status"] = "Cooked";
}
else if (meal.temperature < meal.cookedAt){
    meal["status"] = "Uncooked";
}
else {
    meal["status"] = "Overcooked";
}
console.log(meal); */

//exo 8
/* 
var number = 45;
if (number > 0) {
  if(number%2 === 0) {
    console.log("number is pair");
  }
  else {
    console.log("number is impair");
}}
console.log("Please enter a number at least greater than 0"); */