$(function(){
  
  // SNSボタン
  $('.toplogo').hover(
    function(){
      $(this).children('span').animate({
        'font-size':'30px'
      }, 300);
    },
    function(){
      $(this).children('span').animate({
        'font-size':'24px'
      }, 300);
    }
  );
  
  $('.toplogo').click(function(){
    // animateメソッドを用いて、
    // アニメーション付きでスクロールするようにしてください。

    $('html, body').animate({'scrollTop':0},500)
  });
  
});
