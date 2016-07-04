var $dataa = jQuery(document.createElement("html"));
$dataa[0].innerHTML = dataa;
var $body = jQuery("body");
/**
 * Update Body Classes
 */
updateBodyClasses();
function updateBodyClasses() {
  var newBodyClasses = $dataa.find("body").attr("class");
  var newClasses = "";
  if ( $body.hasClass("admin-bar") ) {
    var newBodyClassesArray = newBodyClasses.split(" ");
    var currentBodyClassesArray = $body.attr("class").split(" ");
    if ( jQuery.inArray("customize-support", currentBodyClassesArray ) > -1 ) {
      var n = jQuery.inArray("no-customize-support", newBodyClassesArray );
      newBodyClassesArray[n] = "customize-support";
    }
    jQuery(newBodyClassesArray).each(function(index){
      newClasses += jQuery(this)[0];
      if ( index != newBodyClassesArray.length-1 ) {
        newClasses += " ";
      }
    })
  } else {
    newClasses = newBodyClasses;
  }
  $body.removeClass().addClass(newClasses);
}
/**
 * Update Admin Bar
 */
updateAdminBar();
function updateAdminBar() {
  if ( $body.hasClass("admin-bar") ) {
    var $currentAdminBar = jQuery("#wpadminbar");
    var $newAdminBar = $dataa.find("#wpadminbar");
    var $newEditLink = $newAdminBar.find("#wp-admin-bar-edit");
    $currentAdminBar.find("#wp-admin-bar-edit").remove();
    if (typeof $newEditLink != 'undefined') {
      jQuery("#wpadminbar #wp-admin-bar-root-default").append($newEditLink);
    }
    var newCustomizeLinkHref = $newAdminBar.find("#wp-admin-bar-customize a").attr("href");
    $currentAdminBar.find("#wp-admin-bar-customize a").attr("href",newCustomizeLinkHref);
  }
}