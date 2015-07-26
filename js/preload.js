$(function(){
    jQuery.preloadImages = function(){
        for(var i = 0; i<arguments.length; i++){
            jQuery("<img>").attr("src", arguments[i]);
        }
    };
    $.preloadImages("img/about_bk.png","img/photo_bk.jpg");
});