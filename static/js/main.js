
$(document).ready(function() {

  var $menu = $('#menu'),
    $menulink = $('.menu-link'),
    $index=$('#index'),
    $indexlink= $('.dropbtn'); 

$menulink.click(function() {
  $menulink.toggleClass('unrolled');
  $menu.toggleClass('unrolled');
  return false;
});


$indexlink.click(function() {
  $index.toggleClass('show');
  return false;
});




});



