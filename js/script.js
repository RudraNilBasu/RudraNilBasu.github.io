// <![CDATA[
$(function() {

  // Slider
  $('#coin-slider').coinslider({width:1500,height:327,opacity:1});

  // Radius Box
  $('.menu_nav ul, .content .mainbar h2, .content .sidebar h2, .post_content a.rm, .content p.pages span, .content p.pages a').css({"border-radius":"6px", "-moz-border-radius":"6px", "-webkit-border-radius":"6px"});
  //$('.slider').css({"border-top-left-radius":"6px", "border-top-right-radius":"6px", "-moz-border-radius-topleft":"6px", "-moz-border-radius-topright":"6px", "-webkit-border-top-left-radius":"6px", "-webkit-border-top-right-radius":"6px"});
  //$('.content p.pages span, .content p.pages a').css({"border-radius":"16px", "-moz-border-radius":"16px", "-webkit-border-radius":"16px"});
  //$('.content_resize').css({"border-bottom-left-radius":"6px", "border-bottom-right-radius":"6px", "-moz-border-radius-bottomleft":"6px", "-moz-border-radius-bottomright":"6px", "-webkit-border-bottom-left-radius":"6px", "-webkit-border-bottom-right-radius":"6px"});

});	

// Cufon
Cufon.replace('h1, h2, h3, h4, h5, h6, .menu_nav ul li a, .post_content a.rm', { hover: true });
//Cufon.replace('h1', { color: '-linear-gradient(#fff, #ffaf02)'});
//Cufon.replace('h1 small', { color: '#8a98a5'});

// ]]>