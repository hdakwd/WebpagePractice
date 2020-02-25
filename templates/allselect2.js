$(function() {
var $unit = $('#a-sel');

var n_unit = $unit
var nval = n_unit.val();
var bval = n_unit.val();

$('option:first', $unit).click(function(){
 if ($.inArray('すべて', bval) === -1) {
  $(this).parent()[0].find('option').each(function() {
   //prop('selected', 'selected');
$tmp=$(this);
console.log($tmp.parent()[0].tagName);
  });


 }else {
  $(this).parent().prop('selected', false);
 }

console.log('0')
});


$('option:not(:first)', $unit).click(function(){


console.log('not 0')
});



});