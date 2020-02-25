$(function() {
var $unit = $('#a-sel');

var n_unit = $unit
var nval = n_unit.val();
var bval = [];

$unit.change(function() {
bval = nval;
nval = $(this).val();

console.log(nval);


if ($.inArray('すべて', nval) !== -1) {
 if ($.inArray('すべて', bval) === -1) {
  //'すべて'が選択された
  console.log('select all')

  $('option[selected!="selected"]', this).each(function() {
   $(this).prop('selected', 'selected');
   console.log(nval);
  }
  );
 }else {
  //今も昔も'すべて'が選択されてる。
  //消去法選択
  console.log('exclude method');
  console.log(nval);

 }
}else {
 if ($.inArray('すべて', bval) !== -1) {
  console.log('all cancell');
  //'すべて'が未選択状態になった
  //all select is off

  $('option', this).each(function() {
   $(this).prop('selected', false);
   console.log(nval);
  }
  );
 }else {
  //'すべて'は今も昔も選択されてない。
  console.log('nomal');
  console.log(nval);

 }
}
})
});