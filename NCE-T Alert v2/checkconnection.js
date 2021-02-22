let init_interval=3000;
var interval=init_interval;
let audio=new Audio();
audio.src=chrome.runtime.getURL('Warning.mp3');
setInterval(function() {
let alertbox=document.getElementById('offline');
//console.log("checking...");
if(alertbox!=null) {
    interval=init_interval/2;
    audio.play();
} else interval=init_interval;
document.getElementById('interval').textContent=interval;
},interval);

function OnBtnClick()
{
    let input=document.getElementById('interval');
    console.log('input='+input.value);
    let int=Number.parseInt(input.value);
    if(!int || int <100) return;
    console.log('set interval='+int);
   interval=int;
}