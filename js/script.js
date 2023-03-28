$(function(){
    var loading = $("#js-loading");

/*ページの読み込みが完了後にアニメーションを非表示・MVの高さを調整*/
    $(window).on("load", function(){
        var windowHeight = $(window).height();
        $(".mv").height(windowHeight);
        loading.delay("1000").fadeOut("2000");
    });

/*ページが読み込まれなくても非表示*/
    setTimeout(function(){
        loading.fadeOut("3000");
    }, 8000);

/*画面リサイズ時にMVの高さを調整*/
$(window).resize(function () {
    var windowHeight = $(window).height();
    $(".mv").height(windowHeight);
});


});