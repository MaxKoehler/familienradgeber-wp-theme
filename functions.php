<?php
/**
 * Note: Usage of this file in comparison to the Plugin "My Custom Functions"
 * So this is the main functions.php file... ok... but in comparison with the "my custom functions" plugin php code, we can set more fixed/definitly-needed functions in here... and inside the plugin we add more variiable/dynamic functions, which may get changed quickly sometimes and then its easier to use this plugin instead of manually navigating to this file inside the child-theme.
 *
 * Contents:
 *
 * - Enqueue Scripts (main.js)
 * - Add Javascript Detection
 */

/**
 * Enqueue Theme Styles and Scripts
 */
add_action( 'wp_enqueue_scripts', 'frg_storefront_child_scripts' );
function frg_storefront_child_scripts() {

    // http://ricostacruz.com/jquery.transit/
    // - To enable e.g. $("div").transition({ x: 200 });
    wp_enqueue_script( 'jquery-transit', get_stylesheet_directory_uri() . '/assets/js/plugins/jquery.transit.min.js', array('jquery'), '1.0.0', true );

    wp_enqueue_script( 'frg-storefront-child-main-js', get_stylesheet_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true );
}

/**
 * Javascript Detection
 * - Fix: http://wordpress.stackexchange.com/a/214404/73571
 * - Replacement function copied from "twentysixteen" theme
 */

/**
 * Fix Javascript Detection
 *
 * Add `.no-js` class to the root `<html>` element on page initiation.
 */
add_filter( 'language_attributes', 'lang_atts_js_detect' );
function lang_atts_js_detect($output) {
    return $output . ' class="no-js"';
}

/**
 * Handles JavaScript detection.
 *
 * Adds a `js` class to the root `<html>` element when JavaScript is detected.
 *
 * @since Twenty Sixteen 1.0
 */
function twentysixteen_javascript_detection() {
  echo "<script>(function(html){html.className = html.className.replace(/\bno-js\b/,'js')})(document.documentElement);</script>\n";
}
add_action( 'wp_head', 'twentysixteen_javascript_detection', 0 );


?>