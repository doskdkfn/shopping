$(document).ready(function () {
    $('#gnb > li').hover(function() {
        $('.submenu').stop().slideDown();
    }, function() {
        $('.submenu').stop().slideUp();
    });
/************* banner slide *************/ 
    var idx = 0;
    setInterval(function() {
        $('#slide>a').eq(idx).fadeOut(400);
        idx==2?idx=0:idx++;
        $('#slide>a').eq(idx).fadeIn(800);
    }, 3000);
/************** main slide **************/
    setInterval(function() {
        $('#mslide > a').eq(idx).show();
        idx==2?idx=0:idx++;
        $('#mslide > a').eq(idx).hide();
    }, 3000);

    setInterval(function() {
        $('#mslide2 > a').eq(idx).show();
        idx==2?idx=0:idx++;
        $('#mslide2 > a').eq(idx).hide();
    }, 3000);
    
});