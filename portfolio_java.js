
// function showElement(p_element) {
//     var element = document.getElementById(p_element);
//     if (element.style.display === "block"){
//         element.style.display = "none";
//     }
//     else {
//         element.style.display = "block";
//     }
// }

$(window).on("load",function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".hideme").each(function() {
        /* Check the location of each desired element */
        var objectTop = $(this).offset().top;
        /* If the element is completely within bounds of the window, fade it in */
        if (objectTop < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(1500,1);}
        }
      });
    })

$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1500);  
            }
        }); 
    });
});


$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).on('scroll', function(){
        /* Check the location of each desired element */
        $('.hidemeless').each( function(i){
            var top_of_object = $(this).offset().top + 200;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > top_of_object ){
                $(this).animate({'opacity':'1'},1000);  
            }
        }); 
    });
});

$(document).ready(function(){
    setTimeout(function() {
    /*! Fades in page on load */
    $('.mainCont').fadeIn(1500);
    }, 1000);
});


