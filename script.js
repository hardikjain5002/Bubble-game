var timer=60;
var score=0;
document.querySelector("#scoreval").textContent=score;
var hitrn=0;

// jispe click karoge wo element par event raise hoga , aur event listener naa milne par event element ke parent par listener dhundhega , waha bhi naa milne par event parent ke parent ke parent par listener dhudega




function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;

}
function getNewHit(){
   hitrn =Math.floor(Math.random()*10);
     document.querySelector("#hitval").textContent=hitrn;
}
function makebubble(){
    var clutter="";
for(var i=1;i<=168;i++){
    var rn =Math.floor(Math.random()*10);
   clutter+= `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;
}

function runTimer(){
   var timerint = setInterval(function(){
        if(timer>0){  
            timer--;
        document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML =`<h1> GAME OVER</h1>`;
        }
    },1000);
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
  var clickednumber = Number(dets.target.textContent);
   if(clickednumber===hitrn){
    increaseScore();
    makebubble();
    getNewHit();  
   }
});


runTimer();
makebubble();
getNewHit();

