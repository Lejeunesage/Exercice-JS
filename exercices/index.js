// let flora = [1,2,3,4,5,6,7,8,9];

// check = arr =>  arr.every(x => x >= 10);
// console.log(check(flora));

// EXERCICES 1 :Écrire un programme qui permet de ressortir la longueur d’un tableau ou d’une chaîne de caractère 
// Ex: "marcos" => 6;

longueur = x => x.length;
console.log("la longueur du string");
console.log(longueur("Johannes"));


// EXERCICES 2 : Écrire un programme qui permet de compter le nombre de fois qu’il y a une lettre dans une chaîne de caractère ou dans un tableau. Il peut s’agir d’une fonction qui reçoit en argument la chaîne de caractère ou le tableau et la lettre a compter.
// Ex: "medenou", m => 1 fois 

/*STRING:*/

getStringLetter = (str,n) => {
    let table = str.split(n);
    let ans = table.length-1;
    console.log(ans);
}
console.log("Combien de 'a' se trouve dans 'annaconda'");
getStringLetter("annaconda", "a");

/*ARRAY:*/

getArrayLetter = (arr,n) => {
    let str = arr.join(',');
    let table = str.split(n);
    let ans = table.length-1;
    console.log(ans);
}

let  array = ["tony", "montana", "corona"]
console.log("Combien de 'n' se trouve dans le tableau array");
getArrayLetter(array, "n");

// EXERCICES 3 : Écrire un programme qui permet de retirer un caractère préciser dans un chaîne de caractère ou dans un tableau.
// Ex: "string", s => tring

/*STRING:*/
removeLetter = (str, n) => {
    let table = str.split(n);
    let string = table.join('')
    console.log(string);
}
console.log("Supprimer la lettre 'a' de 'annaconda'");
removeLetter("annaconda", "a");

/*ARRAY:*/
removeLetterArray = (arr, n) => {

    let str = arr.join('')
    let table = str.split(n);
    let string = table.join('')
    console.log(string);
}

console.log("Supprimer tout les 'n' d'un array ['tony', 'montana', 'corona']");
removeLetterArray(array, "n");


// EXERCICE 4 :Écrire un programme qui permet de transformer par bon de 2 chacune des lettres du nom de l’utilisateur en majuscule.
// Indication :Pensez a traiter les espaces au cas ou l’utilisateur en mettait
// Medenou marcos => MeDeNoU MaRcOs


upper = (str) => {
    let array = str.split();
    // console.log(array);
    for (let i = 0; i < array.length; i+2) {
        array[i] = array[i].toUpperCase();
        
    }
    return array;
}

console.log(upper("Medenou marcos"));









