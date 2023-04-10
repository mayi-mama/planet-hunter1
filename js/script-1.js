//ローディング
const loading = document.querySelector('#js-loading');

window.addEventListener('load', ()=>{
    setTimeout(function(){
        loading.classList.add('hide')
   }, 1000);
});

//高さをあわせる
window.addEventListener("load", () => {
    let elem = document.querySelector(".mv");
    let wh = document.documentElement.clientHeight;
    elem.style.height = wh + "px";
}, false);

//画面をリサイズ時に高さをあわせる
window.addEventListener("resize", () => {
    let elem = document.querySelector(".mv");
    let wh = document.documentElement.clientHeight;
    elem.style.height = wh + "px";
}, false);

//音声を再生と停止
const music = new Audio('assets/audio/cinematic-melody-main-9785.mp3');
const play = document.querySelector('#js-audio-play');

// 再生ボタン
play.addEventListener('click', function(){
  if(!music.paused){
    music.pause();
  }else{
    music.play();
    music.loop = true;
  }
});




