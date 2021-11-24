$(document).ready(function () {
  // 모달창 기능 
    // 1 : .modal       을 찾아서  웹브라우저에 보관
    let modal = $('.modal');
    // 2 : .modal-cont  를 찾아서  웹브라우저에 보관
    let modal_cont = $('.modal-cont');
    // 3   : .modal-close 를 찾아서  웹브라우저에 보관 
    let modal_close = $('.modal-close');
    // 3-1 : .modal-show 를 찾아서 웹브라우저에 보관한다.
    let modal_show = $('.modal-show');

    // 4 : .modal 을 display:none 안보여요.
    // modal.fadeIn();

    // 5 : .modal_close 를 마우스로 클릭하면 사라진다.
    modal_close.click(function () {
        modal.fadeOut();
    });

    // 6 :  .modal 을 마우스로 클릭하면 사라진다.
    modal.click(function () {
        modal.fadeOut();
    });

    // 7 : .modal-cont 를 마우스로 클릭하면 그냥 있어라.
    modal_cont.click(function (event) {
        event.stopPropagation();
    });

    // 8   :  .modal-show 를 마우스로 클릭하면 보여요.
    // 8-1 : 아주 중요합니다. 
    // 8-2 : a 태그라면 주의하세요. !!!!!!!!!!!!
    modal_show.click(function (e) {
        // href 를 막아야 합니다.
        e.preventDefault();
        modal.fadeIn();
    });
    // 위로가기
    $('.gotop').click(function (e) {
        // href 를 막는다.
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        });
    });

    // 스크롤바 처리
    $(window).scroll(function () {
        // 스크롤바의 위치
        var scY = $(window).scrollTop();

        if (scY >= 300) {
            $('.gotop').addClass('gotop-active');
        } else {
            $('.gotop').removeClass('gotop-active');
        }

    });

    // cs 슬라이드
    new Swiper('.sw-cs', {
        slidesPerView: 4,
        spaceBetween: 0,
        slidesPerGroup: 2,
        pagination: {
            el: ".sw-cs-pg",
            clickable: true,
        },
    });

    // 베스트 상품 메뉴 
    var best_cate_list = $('.best-cate-list>li');
    var best_cate_bg = $('.best-cate-bg');
    var distanceY = 55;
    $.each(best_cate_list, function (index, item) {
        var aTag = $(this).find('>a');
        var nowLi = $(this);
        aTag.click(function (e) {
            e.preventDefault();
            best_cate_bg.css('top', index * distanceY);
            best_cate_list.removeClass('best-cate-focus');
            nowLi.addClass('best-cate-focus');
        });
    });

    // 배너슬라이드
    new Swiper('.sw-banner2', {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        effect: "fade",
        crossEffect: {
            crossFade: true
        },
        speed: 1000,
    });

    // 펼침 목록 만들기
    $('.f-site-bt').click(function () {
        $('.f-site-list').stop().slideToggle();
        $('.f-site-bt').toggleClass('f-site-bt-active');
    });

});