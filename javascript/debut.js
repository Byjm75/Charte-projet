/*le code dans le dossier debut.js était un essai infructueux pour l'exercice - effacement de cet essai au 10/09/2022 */

/*Reprise de la page javascript debut.js au 11/09/2022*/

var personnel = ['Ronald "rigolo"', 'Soheli "souriante"', 'Nicolas "naturel"', 'Mouss "matinale"', 'Johann "joueur"', 'Philippe "petit"', 
'Paul "Patient"', 'Etienne "entrainant"', 'Safae "sincère"', 'Eric "éclaté le matin"', 'Mathieu "marrant"', 'Mickaël "modéré"', 'Ludovic "loyal"', 
'Téo "tenace"', 'Floriane "fidèle"', 'Jocelin "jovial"', 'Florian "fatigué"', 'Etienne "étourdi"'];       /*La première idée est de centraliser les prénoms dans un tableau*/
var rand = Math.floor(Math.random()*personnel.length);
var tirage = personnel[rand];
console.log(tirage)
/*La deuxième idée est d'utiliser une fonction native javascript pour générer le rendu aléatoire.
Math.random() est une fonction générant une valeur aléatoire, ayant un rendu avec valeur à virgule flottante : ceci est problèmatique ! 
D'après ce que j'ai pu lire sur internet, pour définir la plage de cette valeur aléatoire,
nous devons la multiplier par la longueur du tableau que nous avons en utilisant le type de donnée 'length'.
Le type de données CSS 'length' correspond à une mesure de distance.
La troisième idée est d'utiliser une autre fonction native de javascript Math.floor(). Ceci covertit un nombre à virgule flottante en un entier.
Ensuite, on affiche le résultat.*/


/*Mise en place d'une fonction avec function().*/

function renduTirage(array){                                    /*La fonction à rappeler dans le fichier HTML sera donc 'renduTirage()' */
    var rand = Math.floor(Math.random()*personnel.length);
    var tirage = personnel[rand];
    return tirage;
}
