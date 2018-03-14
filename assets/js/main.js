function windowResize() {
    screW = window.innerWidth;
    screH = window.innerHeight;
    screHH = (screH / 2);
    screHW = (screW / 2);
}
$(document).ready(function() {
    // pega o tamanho da janela ao carregar o documento
    windowResize();
    $(window).resize(function() {
        // pega tamanhos sempre que a tela for redimensionada
        windowResize();
    });

    
    // ajusta imagens as figures
    $("figure.fit").each(function(){
        var $img = $(this).children("img");
        if ($img) {
            $(this).css('background-image', 'url(\'' + $img.attr('src') + '\')');
            $img.hide();
        }
    });

    
    $('.jarallax').jarallax({
        speed: 0.2
    });
    $('.myDiv').boxLoader({
        direction:"y",
        position: "100%",
        effect: "fadeIn",
        duration: "1s",
        windowarea: "50%"
    });
    $('a[href^="#"]').bind("click.smoothscroll", function(n) {
        n.preventDefault();
        var i = $(window).scrollTop(),
        r = this.hash,
        t = $(r);
        i < 100 ? $("html, body").animate({
            scrollTop: t.offset().top -120 
        }, 1e3) : $("html, body").animate({
            scrollTop: t.offset().top -120  
        }, 1e3)
    });
    // Place any jQuery/helper plugins in here.
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $(".top-banner").mousemove(function(e){
              var pageX = e.pageX - ($(window).width() / 2);
              var pageY = e.pageY - ($(window).height() / 2);
              var newvalueX = width * pageX * -1 - 25;
              var newvalueY = height * pageY * -1 - 50;
              $('.top-banner').css("background-position", newvalueX+"px     "+newvalueY+"px");
    });
});