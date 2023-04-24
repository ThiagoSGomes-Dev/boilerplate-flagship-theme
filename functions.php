<?php

function custom_rest_route() {
  register_rest_route( 'boilerplate-flagship-theme/v1', '/menu', array(
      'methods' => 'GET',
      'callback' => 'get_custom_menu',
  ) );
}
add_action( 'rest_api_init', 'custom_rest_route' );

function get_custom_menu() {
  $menu_items = wp_get_nav_menu_items( 'Menu_nav' ); // substitua "Menu Principal" pelo nome do seu menu
  return $menu_items;
}


function boilerplate_load_assets() {
  wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);
  wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
}

add_action('wp_enqueue_scripts', 'boilerplate_load_assets');

function boilerplate_add_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'boilerplate_add_support');

