function getSelectValue() {
tmp=[];
$('select', $div).each(function(){
 tmp.push($(this).val());
});
 return tmp;
}

//プラグイン宣言
(function($) {
    $.fn.sample = function(){ //args... : etc. '#sel1'
all=''
$div = $(this);
var bvals=getSelectValue();//各selectのvalueを設置

//selectにクリックイベントを設置していく
$('select', $div).each(function(index){

$('option:first', $(this)).click(function(){
idx=$(this).parent('select').index('select');
if($.inArray('すべて', bvals[idx]) === -1){
 $(this).parent('select').find('option').each(function(){
  $(this).prop('selected', true); //全選択
 });
}else {
 $(this).parent('select').find('option').each(function(){
  $(this).prop('selected', false);//全選択解除
 });
}
bvals=getSelectValue();
});

//'すべて'選択肢以外を設定
$('option:not(:first)', $(this)).click(function(){
idx=$(this).parent('select').index('select');

if($.inArray('すべて', bvals[idx]) === -1){
 //通常選択
}else {
 //消去法選択
 sel=$(this).val();

 exist=$.inArray(sel, bvals[idx]);
 if(exist === -1){
  bvals[idx].push(sel);
 }else {
  bvals[idx].splice(exist,1);
 }

 $(this).parent('select').find('option').each(function(){
  exc=$.inArray($(this).val(), bvals[idx]);
  if(exc === -1) {
   $(this).prop('selected', false);
  }else {
   $(this).prop('selected', true);
  }
 });
}
bvals=getSelectValue();//更新
});
});

        return(this);
    };
})(jQuery);

