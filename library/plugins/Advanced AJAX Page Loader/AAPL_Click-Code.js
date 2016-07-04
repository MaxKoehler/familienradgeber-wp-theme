updateActiveClasses();
function updateActiveClasses() {
  currentItemClasses = "current-menu-item current_page_item";
  currentParentClasses = "current-menu-parent current-page-parent current_page_parent";
  currentAncestorClasses = "current-page-ancestor current-menu-ancestor current_page_ancestor";
  $thiss = jQuery(thiss);
  $menuItems = jQuery(".main-navigation li"); // Includes .primary- and .handheld-navigation elements
  removeActiveClasses($menuItems);
  /**
   * Check if the clicked object is inside the main-navigation or anywhere else on the page
   */
  // if(typeof $thiss.parents(".main-navigation")[0] != 'undefined') {
  //   // => Inside main-navigation
  //   addActiveClasses($thiss.parent('li'));
  // } else {
  // }
  // Note: Because there are two navigations (desktop/mobile), we for now always search through all elements on click and replace the active state completely.
  /**
   * Search through .main-navigation and find the links with equal href value and set them to active
   */
  href = $thiss.attr("href");
  $menuItems.each(function(index){
    $link = $(this).children(":first");
    if ( $link.attr("href") == $thiss.attr("href") ) {
      addActiveClasses($(this));
    }
  })
  function removeActiveClasses($items) {
    classes = currentAncestorClasses + " " + currentParentClasses + " " + currentItemClasses;
    $items.removeClass(classes);
  }
  function addActiveClasses($item) {
    $item.addClass(currentItemClasses);
    $item.parent("li").addClass(currentParentClasses);
    $item.parents("li").each(function(index){
      if(typeof $(this).parents(".main-navigation")[0] != 'undefined') {
        $(this).addClass(currentAncestorClasses);
      }
    });
  }
}