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
         pagination: {
             el: '.swiper-pagination',
         },
         navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
         },
         breakpoints: {
             320: {
                 slidesPerView: 1,
             },
             767: {
                 spaceBetween: 30,
                 slidesPerView: 2,
             },
             1024: {
                 slidesPerView: 3,
             },
             1100: {
                 spaceBetween: 80,
             }
         }
    });

} );

/*
ON SCROLL PAGE FUNCTIONS
*/

jQuery( window ).on( 'scroll', function() {



} );