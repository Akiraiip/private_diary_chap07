//$(".openbtn").click(function () {//ボタンがクリックされたら
$(".globalBtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
//    is-open
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $("#header,#home").toggleClass('mainblur');//ぼかしたいエリアにmainblurクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".globalBtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去し
    $("#header,#home").removeClass('mainblur');//ぼかしているエリアのmainblurクラスを除去
});