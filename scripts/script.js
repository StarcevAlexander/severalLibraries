//разрешаем вводить только заданные цифры
$('body').on('input', '.input-number', function(){
  this.value = this.value.replace(/[^0-9]/g, '')});
// ограничиваем максимальную длинну вводимых данных
$('#validationDefault05').attr('maxlength', '6')

//вешаем обработчик и проверяем заполненоость инпутов в форме
  $('#btn-form-sub').on('click',function(){
  if($('#validationDefault01').val() ==''){alert('Вы не заполнили имя')}
  else if ($('#validationDefault02').val() ==''){alert('Вы не заполнили фамилию')}
  else if ($('#validationDefault03').val() ==''){alert('Вы не заполнили номер')}
  else if ($('#validationDefault04').val() ==''){alert('Вы не заполнили страну')}
  else if ($('#validationDefault05').val() ==''){alert('Вы не заполнили индекс')}
  else if ($('#validationDefault05').val().length < 6) {alert('В индексе должно быть не менее 6 знаков')}
  else if ($('#validationDefault06').val() ==''){alert('Вы не заполнили адрес')}
  else { 
    $('#form-for-sale').hide()
    $('#text-for-form').html('Спасибо за заказ!')}
  return false
})

//для слайдера
$('.slider').slick({

});

//для работы аккордеона
$( function() {
  $( "#accordion" ).accordion({
    collapsible: true
  });
} );


//вау эффект

new WOW().init();

$("#123").click(function() {
  $(this).toggleClass("wow zoomIn animated");
});