//exo 1

// 9 fois, One run ... 0/2/4/6/8, car on n'incrémente plus par 1 mais par 2
// si on enlève i++, cela devient une boucle infini.

//exo 2

// 10 One..., elle est affichée 1 fois, car les instructions s'appliquent avant la commande console.log
// 5 One..., car il y a 5 fois la répétition de la boucle for pour i (0,2,4,6,8)
// si on supprime i++, la boucle est infinie. Le fonctionnement de for est différent car les instructions en paramètres ne sont pas construites de la même façon,
// dans ce cas le résultat indique le nombre de fois où console.log apparaît, tandis que l'autre affiche toutes les console.log jusqu'à que la condition soit fausse.

//exo 3 & exo 4
/* let i = 0;
while (i <= 100){
    if (i%2 === 0){
        console.log(i + " is even")}
             else {
            console.log (i +" is odd")
        }
        i++;
    } */

//exo 5
/* let items = ["First item","Second item","Third item","Fourth item"];

for (let i=0; i < 5; i++) {
  console.log(items[i]);
}    */ 
// les 4 valeurs du tableau sont affichées, parce que la boucle for a un compteur i qui s'incrémente en index du tableau tant qu'il n'est pas égal à 4.
// ce modèle de boucle permet de récupérer les valeurs du tableau selon l'index i.
// la dernière valeur est undefined, elle n'est pas dans le tableau.

//exo 6

/* customers = [
    "Albin Term",
    "Anna Sandgrove",
    "John Doe",
    "Terrance Head",
    "Yan Mock",
    "Zoe Durst"
  ];
  console.log("List of all customers :");
  for (i=0; i < 6; i++) {
    console.log(customers[i]);
  } */

//exo 7

/* let items = [
    "First item",
    "Second item",
    "Third item",
    "Fourth item"];
for (let item of items){
  console.log(item);
} */
// Oui on y a accès. La boucle for of a une syntaxe plus courte et il ajoute un compteur automatiquement. Il va chercher directement les valeurs du tableaux. Il ne peut pas être utilisé sur les tableaux associatifs.
// for est mieux adapté pour parcourir les tableaux, cependant il nécessite un compteur.

//exo 8

/* let citizen = {
  "firstname" : "John",
  "lastname" : "Doe",
  "age" : 45,
  "income" : 60000,
  "sexe" : 0
}
console.log("citizen identity :");
for (let key in citizen){
  if (key === "sexe"){
    if (citizen[key]){
      console.log(key + " : female");}
      else {
        console.log(key + " : male");}
      }
      else {
        console.log(key + " : " + citizen[key]);
      }
    }
 */
//exo 9

/* let citizens = [
  {
    "firstname" : "John",
    "lastname" : "Doe"
  },
  {
    "firstname" : "Anna",
    "lastname" : "Molner"
  },
  {
    "firstname" : "Harry",
    "lastname" : "Trueman"
  },
  {
    "firstname" : "Cecile",
    "lastname" : "Mercier"
  }
]; */

/* for (let citizen of citizens){
  console.log("citizen : ");
    for (let key in citizen){
      console.log(key + " . " + citizen[key]);
    }
} */

  
 /* for (let index in citizens){
  console.log("citizen : ");
    for (let key in citizens[index]){
      console.log(key + " : " + citizens[index][key]);
    }
}
 */




