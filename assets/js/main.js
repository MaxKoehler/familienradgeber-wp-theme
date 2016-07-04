console.log(".../assets/js/main.js");

/**
 * Add Close-Button to the "Demo-Shop"-Notification
 * - Includes general fade/slideToggle animation...
 *   => Can be reused inside the main-navigation
 */
addCloseButtonToDemoShopNotification();
function addCloseButtonToDemoShopNotification() {
  var $button = jQuery('<button id="close-demo_store" class="close-button"><i class="fa fa-times"></i> Schließen</button>');
  var $container = jQuery('.demo_store');
  var myVar;
  $button.on("click", function(){
    if ( ! $container.hasClass("close") ) {
      console.log("close");
      $container.addClass("close");
      myVar = setTimeout(function(){
        $container.addClass("hidden");
      }, 400);
    } else {
      console.log("open");

      // So while the element is set to display: none (.hidden), i *guess that it is unable to calculate any transform(translate) while hidden. Then setting display back to block and at the same time translate, will result in not beeing able to animate the translate...
      // => Try a 1ms delay between the two:

      $container.removeClass("hidden");
      // => Set display to "block" again

      setTimeout(function(){
        $container.removeClass("close");
      }, 1);
      // Reset translate to the default.

      // => This works... but isn't this a stupid hoax?

      clearTimeout(myVar);
    }
  });
  jQuery(".site").prepend($button);
  // jQuery(".demo_store").prepend(closeButton);
}



// jQuery( document ).ready(function( $ ) {

  /**
   * So this actuall only checks if the fixed element is bigger than the viewport height and if not disables touchscroll... So actually totally not what i want...
   * => maybe try to add body overflow: hidden when the navigation is active...
   */
  // $(function() {
  //   // var fixed = document.getElementById('fixed'), overflow;
  //   var fixed = $(".handheld-navigation");
  //   // var overflow;
  //   $(window).on('load resize', function() {
  //     // overflow = fixed[0].scrollHeight-$('.handheld-navigation').height();
  //     // console.log( fixed.scrollHeight ); // undefined
  //     console.log( fixed[0].scrollHeight ); // 1488 [px]
  //   });
  //   fixed.on('touchmove', function() {
  //     // if (overflow) return true;
  //     // else return false;
  //     return false; // Disable touchmove for this element completely... So how can you determine if you scroll up or down? This is somehow stupid?
  //   });
  // });

// var $div = $("#site-navigation");
// var observer = new MutationObserver(function(mutations) {
//     mutations.forEach(function(mutation) {
//         if (mutation.attributeName === "class") {
//             var attributeValue = $(mutation.target).prop(mutation.attributeName);
//             // console.log("Class attribute changed to:", attributeValue);
//             var body = $("body");
//             if ( attributeValue == "main-navigation toggled" ) {
//               // console.log( "Opened Navigation" );
//               // $("body").css("overflow","hidden");
//               // $("html").css("overflow","hidden");
//               body.toggleClass("main-navigation-toggled");
//             } else {
//               // console.log( "Closed Navigation" );
//               // $("body").css("overflow","visible");
//               // $("html").css("overflow","visible");
//               body.toggleClass("main-navigation-toggled");
//             }
//             // This works on the desktop but unfortunately not on IOS iphone 5s
//             // alert("MutationObserver working."); // Correctly functions on mobile too.
//             // So the problem comes with the overflow setting.
//             // - If you try to set a class to body, instead of writing the css inline.
//         }
//     });
// });
// observer.observe($div[0],  {
//     attributes: true
// });

// $div.addClass('red');

// });