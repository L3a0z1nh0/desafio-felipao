const heroName = "Oblivion";

let xpLevel = 2000;

let heroLevel;

if(xpLevel < 1000){
  heroLevel='Ferro';
}else if(xpLevel <= 2000){
  heroLevel='Bronze';
}else if(xpLevel <= 5000){
  heroLevel='Prata';
}else if(xpLevel <= 7000){
  heroLevel='Ouro'
}else if(xpLevel <= 8000){
  heroLevel='Platina'
}else if(xpLevel <= 9000){
  heroLevel='Ascendente'
}else if(xpLevel <= 1000){
  heroLevel='Imortal'
}else if(xpLevel >10000){
  heroLevel='Radiante'
}

console.log("O héroi de nome: " + heroName + " está no nivel de " + heroLevel)