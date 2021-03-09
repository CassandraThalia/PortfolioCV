
// function showElement(p_element) {
//     var element = document.getElementById(p_element);
//     if (element.style.display === "block"){
//         element.style.display = "none";
//     }
//     else {
//         element.style.display = "block";
//     }
// }


$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1000);  
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


