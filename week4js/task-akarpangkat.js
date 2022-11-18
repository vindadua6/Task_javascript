const prompt = require('prompt-sync')({sigint: true});
var number = prompt('Masukkan angka: ');
if(number < 0){

    console.log("Maaf, tidak bisa input bilangan negatif")

}
else if (number%2!=0){
    
    console.log("Maaf, tidak bisa input bilangan ganjil")

}else{
    var akar = Math.sqrt(number)
    console.log("Berikut adalah hasil akar pangkat dua dari",+ number, "=",+ akar)
}