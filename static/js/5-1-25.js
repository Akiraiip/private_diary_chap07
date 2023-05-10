$(".openbtn").click(function(event) {
  event.stopPropagation(); // イベント伝播の停止
  $(this).toggleClass('active');
  $(this).toggleClass('is-open');
//  $("#g-nav").toggleClass('panelactive');
  $("#global").toggleClass('active');
  $("#header,#home").toggleClass('mainblur');
});

$("#g-nav a").click(function(event) {
  event.stopPropagation(); // イベント伝播の停止
  $(".openbtn").removeClass('active');
  $(".openbtn").removeClass('is-open');
//  $("#g-nav").removeClass('panelactive');
  $("#global").toggleClass('active');
  $("#header,#home").removeClass('mainblur');
});
