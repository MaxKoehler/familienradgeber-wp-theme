console.log("Sublime Custom JavaScript Editor");

/**
 * Main-Navigation: Autotrigger Items to see sub-menus (Developing)
 */
// $(".main-navigation").addClass("toggled");
// $(".menu-item-116, .menu-item-117, .menu-item-141").toggleClass("hovered");

/**
 * Add .start to #page if menu-item "Start" in .main-navigation is .current-menu-item
 * - So this is only done once, when the page is loaded initially
 * - And instead of using the custom class .start, we can use .home or .page-start instead
 *   and they also automatically get updated, even when ajax is used.
 * => Don't do this anymore.
 */
// if( jQuery("#menu-item-37").hasClass("current-menu-item") ) {
//   jQuery("#page").addClass('start');
// }

/**
 * Set "mix-blend-mode" property for the .main-navigation left/right background fade.
 * => Move that into the .scss file, which should work now.
 */
// jQuery(".storefront-primary-navigation:before").css({"mix-blend-mode":"overlay"});

/**
 * Add "page-slug" to #page on document load
 * - But again it is now done automatically. ( The class .page-{slug} is added to "body" )
 */
// jQuery("#page").addClass(location.pathname.replace(/\//g,'').substring(9));

/**
 * Slideshow
 */
initSlideshow();
function initSlideshow() {
  console.log("initSlideshow()");
  var $slideshow = jQuery("#slideshow");
  $slideshow.find("div").each(function(index){
      src = jQuery(this).attr("data-src");
      console.log(src);
      jQuery(this).css("background-image", "url(" + src + ")" );
  });
  jQuery("#slideshow > div:gt(0)").hide(); // Hide all sliders except the first.
  var index = 1;
  var maxindex = jQuery('#slideshow > div').length;
  setInterval(function () {
      jQuery('#slideshow > div:first')
          .delay(2000).fadeOut(2000)
          .next()
          .fadeIn(2000)
          .end()
          .appendTo('#slideshow');
      jQuery('#slideshow ul li').removeClass('active');
      jQuery('#slideshow ul li:eq(' + index + ')').addClass('active');
      index = index < maxindex - 1 ? index + 1 : 0;
  }, 7000);
}

/**
 * Global Fade-In of <body> on doc.ready
 */
jQuery(document).ready(function() {
  jQuery("body").animate({opacity: "1"},{duration: 1000});
  // jQuery("body").fadeIn(); // This doesn't work? Propably because of opacity: 0; on body...?
  // => So for .no-js users it is now impossible to view this site.
});

/**
 * Claim
 */
jQuery(document).ready(function() {
  jQuery(".claim").animate({top: "+=2em"},{duration: 1000});
  jQuery(".claim").delay(2000).animate({top: "+=2em"}, {duration: 1000});
  jQuery(".claim-text-1").delay(3000).animate({opacity: "0"}, {duration: 1000});
});

