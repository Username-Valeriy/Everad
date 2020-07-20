import $ from 'jquery'
window.jQuery = $;
window.$ = $;

import Swiper from 'swiper'
/*
ON LOAD PAGE FUNCTION
*/

jQuery( window ).on( 'load', function() {

    $('body').removeClass('is-load');

} );

/*
INITIALIZATION FUNCTIONS
*/

jQuery( document ).ready( function( $ ) {

     new Swiper('.sliders-container', {
        slidesPerView: 3,
        spaceBetween: 80,
         navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
         },
         breakpoints: {
             320: {
                 slidesPerView: 1,
                 spaceBetween: 20
             },
             767: {

             }
         }
    });

} );

/*
ON SCROLL PAGE FUNCTIONS
*/

jQuery( window ).on( 'scroll', function() {



} );