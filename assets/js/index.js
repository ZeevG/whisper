/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){
        
        $('pre code').each(function(i, e) {hljs.highlightBlock(e)});

        $(".post-content").fitVids();
        $(".site-head").parallax("50%", .7);

    });

}(jQuery));
