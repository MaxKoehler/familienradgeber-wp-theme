<?php

/**
 * Enqueue Bootstrap v4 Alpha (http://v4-alpha.getbootstrap.com/) Styles and Scripts
 */
// add_action( 'wp_enqueue_scripts', 'bootstrap_scripts' );
function bootstrap_scripts() {
    wp_enqueue_style( 'bootstrap-style', "https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css" );
    wp_enqueue_script( 'bootstrap-script', "https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/js/bootstrap.js", array(), '1.0.0', true );
}

/**
 * Enqueue Custom SCSS code
 * - Now done via the plugin itself => There is an option to enqueue the compiled .css file to the head automatically.
 */
// add_action( 'wp_enqueue_scripts', 'wpdocs_theme_name_scripts', 1000 );
function wpdocs_theme_name_scripts() {
    wp_enqueue_style( 'custom-wpscss', get_template_directory_uri() . '/library/css/style.css' );
}

/**
 * Remove "Storefront designed by WooThemes." from footer credits
 */
// add_filter('storefront_credit_link','custom_remove_footer_credit',10);
function custom_remove_footer_credit(){
    return false;
}

/**
 * Update the theme (storefront) credits in the site-footer
 */
if ( ! function_exists( 'storefront_credit' ) ) {
  /**
   * Display the theme credit
   * @since  1.0.0
   * @return void
   */
  function storefront_credit() {
    ?>
    <div class="site-info">
      <?php echo esc_html( apply_filters( 'storefront_copyright_text', $content = '© ' . get_bloginfo( 'name' ) . ' ' . date( 'Y' ) ) ); ?>
      <?php echo ( ' – <a href="' . get_permalink( get_page_by_title( 'Impressum' ) ) . '">Impressum</a>' ); ?>
      <?php if ( apply_filters( 'storefront_credit_link', true ) ) { ?>
      <br /> <?php printf( __( '%1$s designed by %2$s.', 'storefront' ), 'Storefront', '<a href="http://www.woothemes.com" alt="Premium WordPress Themes & Plugins by WooThemes" title="Premium WordPress Themes & Plugins by WooThemes" rel="designer">WooThemes</a>' ); ?>
      <?php } ?>
    </div><!-- .site-info -->
    <?php
  }
}

?>