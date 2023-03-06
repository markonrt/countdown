let dani = document.querySelector('.cifre .first span');
let sati = document.querySelector('.cifre .second span');
let minuti = document.querySelector('.cifre .third span');
let sekunde = document.querySelector('.cifre .forth span');


function date(){
    console.log()
    let todayDay = new Date();
    let newYear = new Date("Januar 1, 2024");

    let difference = newYear.getTime() - todayDay.getTime();

    dani.innerHTML = Math.floor(difference/(24*60*60*1000));
    sati.innerHTML = Math.floor((difference/(60*60*1000))%24);//ostatak pri deljenju sa 24 jer ima 24 sati u danu
    minuti.innerHTML = Math.floor((difference/(60*1000))%60);//ostatak pri deljenju sa 60 jer ima 60 min u sati
    sekunde.innerHTML = Math.floor(((difference/(1000))%60))//ostatak pri deljenju sa 60 jer ima 60 sek u min
}
setInterval(date, 1000)
//console.log(dani)