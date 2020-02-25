
$(function() {
 
 var before = $('#a-sel').html();

 $('.parent').change(function() {
console.log(before);
console.log($('#a-sel').html(before).find('#all'))
console.log(before.filter('option'))
before.find('#all').val()
  if(before.find('#all').val() =! $(this).find('#all').val()) {
   
  }else {

  }
  before = $('#a-sel').html();

 });

});