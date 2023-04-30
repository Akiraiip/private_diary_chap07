//$(".openbtn").click(function () {//ボタンがクリックされたら
$(".globalBtn").click(function () {//ボタンがクリックされたら
//    is-open
//	$(this).toggleClass('is-open');//ボタン自身に is-openを付与
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与

    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
//    $("#globalBtn").toggleClass('panelBtn');//ナビゲーションにpanelBtnクラスを付与
    $("#header,#home").toggleClass('mainblur');//ぼかしたいエリアにmainblurクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".globalBtn").removeClass('active');//ボタンの activeクラスを除去し
//    $(".globalBtn").removeClass('is-open');//ボタンの is-openクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去し
//    $("#globalBtn").removeClass('panelBtn');//ナビゲーションのpanelBtnクラスを除去し
    $("#header,#home").removeClass('mainblur');//ぼかしているエリアのmainblurクラスを除去
}); 

//$(".globalBtn").click(function () {
//    $(this).toggleClass('is-open');
//    $("#g-nav").toggleClass('panelactive');
//    $("#globalBtn").toggleClass('panelBtn');
//    $("#home").toggleClass('mainblur');
////    $("#header,#home").toggleClass('mainblur');
//});
//
//$("#g-nav a").click(function () {
//    if ($(".globalBtn").hasClass('is-open')) {
//        $(".globalBtn").removeClass('is-open');
//        $("#g-nav").removeClass('panelactive');
//        $("#globalBtn").removeClass('panelBtn');
//        $("#home").removeClass('mainblur');
////        $("#header,#home").removeClass('mainblur');
//    }
//});








//$(".globalBtn").click(function () {
//  $(this).toggleClass('is-open c-hover');
//  $("#g-nav").toggleClass('panelactive');
//  $("#header,#home").toggleClass('mainblur');
//});
//
//$("#g-nav a").click(function () {
//  $(".globalBtn").removeClass('is-open c-hover');
//  $("#g-nav").removeClass('panelactive');
//  $("#header,#home").removeClass('mainblur');
//});

//$(".globalBtn").click(function () {
//  $(this).toggleClass('is-open');
//  $(this).toggleClass('active');
//
//  if ($(this).hasClass('is-open')) {
//    $("#g-nav").addClass('panelactive');
//    $("#header,#home").addClass('mainblur');
//  } else {
//    $("#g-nav").removeClass('panelactive');
//    $("#header,#home").removeClass('mainblur');
//  }
//});
//
//$("#g-nav a").click(function () {
//  $(".globalBtn").removeClass('active');
//  $(".globalBtn").removeClass('is-open');
//  $("#g-nav").removeClass('panelactive');
//  $("#header,#home").removeClass('mainblur');
//});

