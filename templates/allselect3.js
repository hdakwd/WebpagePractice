$(function() {
var $unit = $('#a-sel');

var n_unit = $unit
var nval = n_unit.val(); //選択項目リスト
var bval = n_unit.val(); //選択項目リスト

$('option:first', $unit).click(function(){
 if ($.inArray('すべて', bval) === -1) {
  $(this).parent('select').find('option').each(function() {
   $(this).prop('selected', true);
  });
 }else {
  $(this).parent('select').find('option').each(function() {
   $(this).prop('selected', false);
  });
 }
 bval=n_unit.val();
});

$('option:not(:first)', $unit).click(function(){
 if ($.inArray('すべて', bval) === -1) {
  //通常選択
  bval=n_unit.val();
 }else {
  //消去法選択
  text=$(this).val();

  idx=$.inArray(text, bval)
  if(idx === -1){
   bval.push(text); //未選択状態ならpush->選択状態
  }else {
   bval.splice(idx,1);//選択済みなら削除->未選択状態
  }
  $(this).parent('select').find('option').each(function() {
  idx=$.inArray($(this).val(), bval)
   if (idx === -1) {
    $(this).prop('selected', false);
   }else {
    $(this).prop('selected', true);
   }
  });
  bval=n_unit.val();
 }
});
});