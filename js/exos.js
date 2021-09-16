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

//fonctions exo1


//Math.random();  ne renvoit rien car aucun paramètre n'a été défini.
// cette fonction sert à obtenir un nombre flottant pseudo-aléatoire entre 0 et 1.
// attention 1 est exclu ([0,1[).
// cas d'usage... dans les jeux où il existe un facteur chance.

/* function getRandomInt(){
  return Math.random();
}

let int = getRandomInt();

console.log(int); */

//exo 2

// let number = 12.42359;
// console.log(number); // affiche un nombre, et plus précisemment un float.
// number = Math.round(number); // ne garde pas les décimaux..
// console.log(number); //si le nombre est un décimal à .5, Math.round(x, 1) va arondir jusqu'à 13.
// number = Math.round((number + Number.EPSILON) * 100) / 100;
// console.log(number);

//exo 3

/* let age = "35";
console.log(typeof(age));
age = parseInt(age);
console.log(typeof(age)); */

//exo 4

/* let texte = "J'écris une phrase";
let maxLength = 20;
console.log(texte.length);

if (texte.length > maxLength){
  console.log("Your texte is too long")}
else {
   console.log("OK")   
}; */

//exo 5
/* 
let texte = "A nice boat";
console.log(typeof(texte)); // type string
texte = texte.split("",3); // le paramètre 3 va créer un tableau de 3 valeurs.
texte = texte.split("", 11); // avec espace entre les quotes, va séparer les mots. sans l'espace, va séparer chaque caractères!
console.log(texte); */

//exo 6

// var name = "paul dumas";
// var expectedName = "Paul Dumas";
// let strArr = name.split("");
// console.log(strArr);
// strArr[0] = strArr[0].toUpperCase();
// console.log(strArr);
// à continuer.
//for (let firstLetter in name){





// if (name === expectedName) {
//   console.log("OK Paul you can come in");
// }
// else {
//   console.log("We do not know you");
// }
//l'usage de cette fonction est pour élargir le champ de réussite si un utilisateur doit rentré son nom et son prénom en majuscule.


//exo 7

// let newStudent = [
//   "Ryan Oper",
//   "Franck Martin",
//   "Tom Hawkins"
// ];
// let students = [
//   "John Doe",
//   "Jane Doe",
//   "Marc Alm",
//   "Jimmy Turner"
// ];

//  console.log(typeof(newStudent));
//  console.log(typeof(students));
// let total = Array.prototype.push.apply(students, newStudent);
// console.log(students);

//exo 8

// let transactions = [
//   102,50,4563,42,78,146,10563
// ];

// let researched = 78;
// console.log(transactions.includes(researched)); // le type de valeur renvoyé est booléen

// if (transactions.includes(researched)){
//   console.log("We found a matching transaction")}
//   else {
//     console.log("No match")
//   };

//exo 9

// let students = [
//     "John Doe",
//     "Jane Doe",
//     "Marc Alm",
//     "Jimmy Turner"
//   ];

// console.log(students);

// let order = students.sort();
// console.log(order);

// let lastStudent = students[students.length-1];
// console.log(lastStudent);

//exo 1 functions

// function product(a,b){
//   return a*b
// };
// let result = "The result of the functions is : " + product(4,30);
// console.log(result);

// rien ne s'affiche si on appelle pas la fonction.
// elle a un intérêt si on souhaite afficher plusieurs fois "I am the product", on aura juste à appeler la fonction.
// elle est censée d'après son nom faire une multiplication.
// à refaire pour comprendre le fonctionnement de la fonction, exercice 1 sur l'url "https://thomgo.github.io/Exercices/frontend/javascript/debutant/functions_creation/functions_creation.html"

//exo 2 functions

// function showDigits(){
//   for (i=0;i<=9;i++){
//     console.log(i);
//   }
// };
// showDigits();

//exo 3 functions

// function welcome(firstname = "John", lastname = "Doe"){
//   console.log("Welcome to our site " + firstname + " " + lastname);
// };
// welcome();

//exo 4 functions

// function isAdult(age){
//   if (age >= 18){
//     return "Welcome to the site"
//   }
//   else {
//     return false
//   };
// };

// let valid = isAdult(18);
// console.log(valid);

//exo 5 functions

// function birthYear(){

// }

let today = new Date();
console.log(today);