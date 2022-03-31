// Если на проекте jQuery
$( document ).ready(function() {
  // code
  $('.accordion-group').ariaAccordion({
    contentRole: ['document', 'application', 'document'],
    slideSpeed: 400
  });

  // fix top-menu
  var shrinkHeader = 150;
  var head = $('.page-header');
  var heightHeader = head.height();
  $(window).scroll(function() {
    var scroll = $(this).scrollTop();
    if ( scroll >= shrinkHeader ) {
        // $('body').css('paddingTop',heightHeader);
        head.addClass('shrink');
      }
      else {
          // $('body').css('paddingTop',0);
          head.removeClass('shrink');
      }
  });
  // fix top-menu === end
});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
