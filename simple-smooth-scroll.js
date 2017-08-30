/*!
* simple-smooth-scroll.js
*
* Copyright 2017, Rely
* Released under the MIT License
* 
* ref → https://www.w3schools.com/bootstrap/bootstrap_ref_js_scrollspy.asp
* 
* Date: Aug 30, 2017
*/

$(document).ready(function () {

    //## Let the anchors smooth scrolling with class 'smooth-scroll'.
    // enable effective 'smooth-scroll' class 
    $("a.smooth-scroll").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: ($(hash).offset().top) - 50
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

});