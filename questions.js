var languagesArrayCreation = function () {
var languages = ["Html","CSS","Java","PHP"];
// autre méthode :
// var languages = [];
// languages.push("Html","CSS","Java","PHP");
  return languages;
  // [] = création de tableau
  // méthode.push envoie les infos dans le tableau crée précédemment
}

var numbersArrayCreation = function () {
var numbers = [0, 1, 2, 3, 4, 5];
    return numbers;
}

var ElementReplacement = function (languages) {
// autre méthode :
// languages.splice(2, 1, 'Javascript');
languages[2]='Javascript';
  return languages;
  // la 2 correspond à la place dans le tableau où l'on veut envoyer la modification ( ici Javascript)
}

var AddElementToLanguagesArray = function (languages) {
languages.push('Ruby', 'Python');
  return languages;
  // .push va ajouter ce qui se trouvre entre () à la fin du tableau
}

var AddElementToNumbersArray = function (numbers) {
numbers.unshift(-2, -1);
  return  numbers;
  // .unshift va ajouter ce qui se trouve entre () au début du tableau
}

var deleteArrayFirstElement = function (languages) {
languages.shift();
// .shift supprime le premier élément du tableau
    return languages;
}

var deleteArrayLastElement = function (languages) {
languages.pop();
// .pop supprime le dernier élément du tableau
  return languages;
}

var stringToArray = function (socialMediaInString) {
var socialMedia = socialMediaInString.split(',');
  return socialMedia;
  // .split crée un tableau avec une chaine de caractère déjà connue
}

var arrayToString = function (languages) {
var languages = languages.toString();
  return languages;
  // .toString convertit un tableau en chaine de caractères et sépare les éléments avec une virgule
}

var arraySort = function (socialMedia) {
socialMedia.sort();
// .sort trie les éléments d'un tableau par ordre alphabétique ( ou croissant selon le cas)
  return socialMedia;
}

var arrayInvert = function (languages){
languages.reverse();
// .reserve inverse le sens des éléments d'un tableau
  return languages;
}
