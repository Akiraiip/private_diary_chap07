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
$(document).ready(function() {
  // インジケーターメニューのリンクがクリックされた時の処理
  $(".indicator__menu__list-about").click(function(e) {
    e.preventDefault();
    var target = $(this).find("a").attr("href"); // クリックされたリンクのhref属性の値を取得
    var targetSection = $(target); // href属性の値と一致するセクションを取得

    // インジケーターメニューの表示切り替え
    $(".indicator__menu__list-about").removeClass("is-current");
    $(this).addClass("is-current");

    // 全てのセクションを非表示にし、目的のセクションのみ表示する
    $(".page").removeClass("active");
    targetSection.addClass("active");

    // スムーズスクロール
    $("html, body").animate(
      {
        scrollTop: targetSection.offset().top // 目的のセクションまでスクロール
      },
      800, // スクロールの速度（ミリ秒）
      function() {
        // スクロール完了後に目的のセクションを表示する
        targetSection.addClass("active");
      }
    );
  });
});





//$(document).ready(function() {
//  // インジケーターメニューのリンクがクリックされた時の処理
//  $(".indicator__menu__list-about a").click(function(e) {
//    e.preventDefault();
//    var target = $(this).attr("href"); // クリックされたリンクのhref属性の値を取得
//    var targetSection = $(target); // href属性の値と一致するセクションを取得
//
//    // インジケーターメニューの表示切り替え
//    $(".indicator__menu__list").removeClass("is-current");
//    $(this).parent().addClass("is-current");
//
//    // 全てのセクションを非表示にし、目的のセクションのみ表示する
//    $(".page").removeClass("active");
//    targetSection.addClass("active");
//
//    // スムーズスクロール
//    $("html, body").animate(
//      {
//        scrollTop: targetSection.offset().top // 目的のセクションまでスクロール
//      },
//      800, // スクロールの速度（ミリ秒）
//      function() {
//        // スクロール完了後に目的のセクションを表示する
//        targetSection.addClass("active");
//      }
//    );
//  });
//});
//
//
//
//
//$(document).ready(function() {
//  // インジケーターメニューのリンクがクリックされた時の処理
//  $(".indicator__menu__list.indicator__menu__list-about").click(function(e) {
//    e.preventDefault();
//    var target = $(this).attr("href"); // クリックされたリンクのhref属性の値を取得
//    var targetSection = $(target); // href属性の値と一致するセクションを取得
//
//    // インジケーターメニューの表示切り替え
//    $(".indicator__menu__list").removeClass("is-current");
//    $(this).parent().addClass("is-current");
//
//    // 全てのセクションを非表示にし、目的のセクションのみ表示する
//    $(".page").removeClass("active");
//    targetSection.addClass("active");
//
//    // スムーズスクロール
//    $("html, body").animate(
//      {
//        scrollTop: targetSection.offset().top // 目的のセクションまでスクロール
//      },
//      800 // スクロールの速度（ミリ秒）
//    );
//  });
//});
//

//$(document).ready(function() {
//  // インジケーターメニューのリンクがクリックされた時の処理
//  $(".indicator__menu__list a").click(function(e) {
//    e.preventDefault();
//    var target = $(this).attr("href"); // クリックされたリンクのhref属性の値を取得
//    var targetSection = $(target); // href属性の値と一致するセクションを取得
//
//    // インジケーターメニューの表示切り替え
//    $(".indicator__menu__list").removeClass("is-current");
//    $(this).parent().addClass("is-current");
//
//    // 全てのセクションを非表示にし、目的のセクションのみ表示する
//    $(".page").removeClass("active");
//    targetSection.addClass("active");
//  });
//});
//
//// 初期表示時は最初のページを表示する
//document.getElementById('home').classList.add('active');
//
//// メニューリンクをクリックしたときの処理
//document.querySelectorAll('.indicator__menu__list').forEach(function(link) {
//  link.addEventListener('click', function(event) {
//    event.preventDefault();
//    var pageIndex = this.dataset.pageIndex;
//    showPage(pageIndex);
//  });
//});
//
//// ページを表示する関数
//function showPage(pageIndex) {
//  // すべてのページを非表示にする
//  document.querySelectorAll('.page').forEach(function(page) {
//    page.classList.remove('active');
//  });
//  // 指定されたページを表示する
//  document.getElementById(pageIndex).classList.add('active');
//}

