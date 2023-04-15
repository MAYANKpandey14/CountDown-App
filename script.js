const sDate='18 Feb 2024';
const uidays = document.getElementById('days');
const uihours = document.getElementById('hours');
const uiminutes = document.getElementById('minutes');
const uiseconds = document.getElementById('seconds');
function timeDate(){
    const startDate = new Date(sDate)
    const currentDate= new Date();
    const seconds= (startDate-currentDate)/1000;
    const days=Math.floor(seconds/3600/24);
    const hours = Math.floor(seconds/3600)%24;
    const minutes= Math.floor(seconds/60)%60;
    const sec= Math.floor(seconds)%60;
    console.log(days,hours,minutes,sec);
    // console.log(startDate);
    // console.log(currentDate);
    console.log(sec);
    uidays.innerHTML=sameDigit(days);
    uihours.innerHTML=sameDigit(hours);
    uiminutes.innerHTML=sameDigit(minutes);
    uiseconds.innerHTML=sameDigit(sec);

}

function sameDigit(x){
    return x<10?`0${x}`:x;
}
timeDate();
setInterval(timeDate,1000);


var imgs=[];
imgs[0]="images/bg1.webp";
imgs[1]="images/Adiyogibg.jpg";
imgs[2]="images/b2.jpeg";
imgs[3]="images/bg3.jpeg";



window.addEventListener('load', function() {
  const random = Math.floor(Math.random() * imgs.length);
  document.body.style.backgroundImage = `url(${imgs[random]})`;
});

