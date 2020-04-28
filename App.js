

function clock (){
   
const FullDate = new Date();

var Hours = FullDate.getHours();
var Min = FullDate.getMinutes();
var Sec = FullDate.getSeconds();


if (Hours< 10){
Hours = "0"+Hours;
}
if (Min< 10){
    Min = "0"+Min;
    }
    if (Sec< 10){
        Sec = "0"+Sec;
        }
document.getElementById('hour').innerHTML = Hours;
document.getElementById('min').innerHTML =": "+Min;
document.getElementById('sec').innerHTML =": "+ Sec;

}
setInterval(clock,1000)