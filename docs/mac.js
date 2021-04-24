$(function(){  //ensures that the document is loaded before anything runs
  $('.first-stanza').fadeIn('slow'); //fades first stanza in
});

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.stanza').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},1500);

            }

        });

        /*check location of "p" elements*/
        $("p").each(function(i){

          var top_of_object = $(this).offset().top; /* finds where top of "p" element is */
          var top_of_window = $(window).scrollTop(); /* location of scroll from top of page */

          /* If a "p" element is at the top of the window or has been scrolled past, fade it out */
          if (top_of_window >= top_of_object){

            $(this).animate({'opacity':'0'},1500);

          } 

        });

    });

});

function topFunction(){
  document.body.scrollTop = 0; /* Scrolls to top of doc */
  document.documentElement.scrollTop = 0; /* For browsers other than Safari */
  location.reload(); /* Reloads page so text reappears */
}
