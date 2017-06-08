var $ = require('jquery');

//为导航栏添加点击事件，跳转到指定的板块
(function(){
  $('#about').on('click', function(){
    $('body').animate({
      scrollTop: 0
    }, 500)
  })
  $('#work').on('click', function(){
    $('body').animate({
      scrollTop: 715
    }, 500)
  })
  $('#skill').on('click', function(){
    $('body').animate({
      scrollTop: 1608
    }, 500)
  })
  $('#contact').on('click', function(){
    $('body').animate({
      scrollTop: 2388
    }, 500)
  })
})()