
var c = new Date("Dec 3, 2022 9:00:00").getTime();

var t = setInterval(function() {
var n = new Date().getTime();
var d = c - n;
var da = Math.floor(d / (1000 * 60 * 60 * 24));
var h = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var m = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
var s = Math.floor((d % (1000 * 60)) / 1000);

document.getElementById("dias").innerHTML = da;
document.getElementById("horas").innerHTML = h;
document.getElementById("minutos").innerHTML = m;
document.getElementById("segundos").innerHTML = s;

if (d < 0) {
clearInterval(t);
document.getElementById("text").innerHTML = "ACABOUUUU!";
}
}, 1000);