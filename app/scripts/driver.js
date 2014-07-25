/* Driver.js: Run our web app! */
define(['d3', 'jquery', 'lodash', 'jquery.eventAggregator', 'knockout', 'typed'],
  function(d3, $, _, eventAggregator, ko) {
    var quote = [ "There is something unspeakably sinister about a machine that does nothing  " +
    			  "^2000 -- absolutely nothing --  "
    			+ "^1000 except switch itself off.  "
    			+ "^300 -- Arthur C. Clarke ^2000 "];

    function goBlank() { window.location = "about:blank"; };

    $(function(){
      $(".typewriter").typed({
        strings: quote,
        typeSpeed: 30,
        callback: goBlank
      });
  });

  }
);
