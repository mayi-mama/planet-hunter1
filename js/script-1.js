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


