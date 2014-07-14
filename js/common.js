$(document).ready(function() {
  if( $('#select-category option:selected').text() == 'ヘアスタイル' ||
    $('#selected-category option:selected').text() == 'ヘアスタイル')
  {
    $('.hairstyle').show();
  } else {
    $('.hairstyle').hide();
  }
  
  /*カテゴリがヘアサロンの場合とそれ以外で項目表示切り替え*/
  $('#select-category').change(function() {
      var category = $('#select-category option:selected').text();
    
      if(category == 'ヘアスタイル') {
        $('.hairstyle').show();
      } else { 
        $('.hairstyle').hide();
      }
  });

  $('#selected-category').change(function() {
      var category = $('#selected-category option:selected').text();
    
      if(category == 'ヘアスタイル') {
        $('.hairstyle').show();
      } else { 
        $('.hairstyle').hide();
      }
  });

});