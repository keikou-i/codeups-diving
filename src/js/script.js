jQuery(function ($) {
    // $はjQueryを表す
    // この中であればWordpressでも「$」が使用可能になる

    // 例：クラスがc-btnのcolorを黒色にする
    // $(".c-btn").css("color","black")

    // 例：idがbuttonのテキストを変更
    // $("#button").text("ボタンのテキストを変更");

    // 例：クラスがc-btnをクリックした場合、コンソールログを出力
    // $(".c-btn").click(function() {
    //     console.log("ボタンがクリックされました！");
    // });

    // ハンバーガーメニュー
    const drawerNavItem = document.querySelectorAll('.drawer__body a[href^="#"]');
    const headerHeight = document.querySelector("header").offsetHeight;

    const breakpoint = 768;

    let isMenuOpen = false;
    let isMenuOpenAtBreakpoint = false;

    //メニューを開くアニメーション
    const openMenu = () => {
        if (!$(".drawer").hasClass("js-show")) {
            $(".drawer").addClass("js-show");
            $(".drawer__icon").addClass("js-show");
            $(".header").addClass("js-show");
        }
    };

    //メニューを閉じるアニメーション
    const closeMenu = () => {
        if ($(".drawer").hasClass("js-show")) {
            $(".drawer").removeClass("js-show");
            $(".drawer__icon").removeClass("js-show");
            $(".header").removeClass("js-show");

            isMenuOpen = false;
        }
    };

    //メニューの開閉動作
    const toggleMenu = () => {
        if (!$(".drawer").hasClass("js-show")) {
            openMenu();
        } else {
            closeMenu();
        }
    };

    //リサイズ処理
    const handleResize = () => {
        const bp = breakpoint;
        const windowWidth = $(window).width();

        if (windowWidth > bp && isMenuOpenAtBreakpoint) {
            closeMenu();
        } else if (windowWidth <= bp && $(".drawer").hasClass("js-show")) {
            isMenuOpenAtBreakpoint = true;
        }
    };

    //該当箇所までスクロール
    const linkScroll = (target) => {
        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = targetPosition - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    //ヘッダーアイコン クリック時
    $(".drawer__icon").on("click", toggleMenu);

    //画面幅リサイズ時
    $(window).on("resize", handleResize);

    //ページ内リンクナビメニュー クリック時
    drawerNavItem.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            closeMenu();

            const targetItem = document.querySelector(item.getAttribute("href"));
            linkScroll(targetItem);
        });
    });

    // ボイスセクション
    //要素の取得とスピードの設定
    var box = $(".voice__right"),
        speed = 700;

    //.voice__rightの付いた全ての要素に対して下記の処理を行う
    box.each(function () {
        $(this).append('<div class="color"></div>');
        var color = $(this).find($(".color")),
            image = $(this).find("img");

        var counter = 0;

        image.css("opacity", "0");
        color.css("width", "0%");

        //inviewを使って背景色が画面に現れたら処理をする
        color.on("inview", function () {
            if (counter == 0) {
                $(this)
                    .delay(200)
                    .animate({ width: "100%" }, speed, function () {
                        image.css("opacity", "1");
                        $(this).css({ left: "0", right: "auto" });
                        $(this).animate({ width: "0%" }, speed);
                    });
                counter = 1;
            }
        });
    });

    // プライス　セクション
    var box3 = $(".price__image-wrap"),
        speed = 700;

    box3.each(function () {
        $(this).append('<div class="color"></div>');
        var color = $(this).find($(".color")),
            image = $(this).find("img");

        var counter = 0;

        image.css("opacity", "0");
        color.css("width", "0%");

        //inviewを使って背景色が画面に現れたら処理をする
        color.on("inview", function () {
            if (counter == 0) {
                $(this)
                    .delay(200)
                    .animate({ width: "100%" }, speed, function () {
                        image.css("opacity", "1");
                        $(this).css({ left: "0", right: "auto" });
                        $(this).animate({ width: "0%" }, speed);
                    });
                counter = 1;
            }
        });
    });

    // インフォメーションセクション
    var box2 = $(".information__image-wrap"),
        speed = 700;

    box2.each(function () {
        $(this).append('<div class="color"></div>');
        var color = $(this).find($(".color")),
            image = $(this).find("img");

        var counter = 0;

        image.css("opacity", "0");
        color.css("width", "0%");

        //inviewを使って背景色が画面に現れたら処理をする
        color.on("inview", function () {
            if (counter == 0) {
                $(this)
                    .delay(200)
                    .animate({ width: "100%" }, speed, function () {
                        image.css("opacity", "1");
                        $(this).css({ left: "0", right: "auto" });
                        $(this).animate({ width: "0%" }, speed);
                    });
                counter = 1;
            }
        });
    });

    const campaignSwiper = new Swiper(".campaign__swiper.--campaign", {
        // swiperの名前
        // 切り替えのモーション
        speed: 1000, // 表示切り替えのスピード
        effect: "slide", // 切り替えのmotion (※1)
        allowTouchMove: true, // スワイプで表示の切り替えを有効に

        // 最後→最初に戻るループ再生を有効に
        loop: true,

        // 自動スライドについて
        autoplay: {
            delay: 3000, // 何秒ごとにスライドを動かすか
            stopOnLastSlide: false, // 最後のスライドで自動再生を終了させるか
            disableOnInteraction: true, // ユーザーの操作時に止める
            reverseDirection: false, // 自動再生を逆向きにする
        },

        // 表示について
        // centeredSlides: true, // 中央寄せにする（１番目を）
        centeredSlides: false,
        slidesPerView: "auto",
        // slidesPerView: 4,
        // spaceBetween: 40,
        // autoHeight: true, // 高さを自動調整

        // ページネーション
        pagination: {
            el: ".swiper-pagination.--campaign", // paginationのclass
            clickable: true, // クリックでの切り替えを有効に
            type: "bullets", // paginationのタイプ (※2)
        },

        // ナビゲーション
        navigation: {
            prevEl: ".swiper-button-prev.--campaign", // 戻るボタンのclass
            nextEl: ".swiper-button-next.--campaign", // 進むボタンのclass
        },

        // スクロールバー
        // scrollbar: {
        //     // スクロールバーを表示したいとき
        //     el: ".swiper-scrollbar", // スクロールバーのclass
        //     hide: true, // 操作時のときのみ表示
        //     draggable: true, // スクロールバーを直接表示できるようにする
        // },

        // ブレイクポイントによって変える
        breakpoints: {
            375: {
                // slidesPerView: 1.2,
                spaceBetween: 24,
            },
            768: {
                // slidesPerView: 1.2,
                spaceBetween: 30,
            },
            // 1440: {
            //     // slidesPerView: 3,
            //     spaceBetween: 40,
            // },
        },
    });

    /* =================================================== 
      ※1 effectについて
      slide：左から次のスライドが流れてくる
      fade：次のスライドがふわっと表示
      ■ fadeの場合は下記を記述
          fadeEffect: {
              crossFade: true
          },
      cube：スライドが立方体になり、3D回転を繰り返す
      coverflow：写真やアルバムジャケットをめくるようなアニメーション
      flip：平面が回転するようなアニメーション
      cards：カードを順番にみていくようなアニメーション
      creative：カスタマイズしたアニメーションを使うときに使用します
      
      =======================================================
      ※2 paginationのタイプ
      bullets：スライド枚数と同じ数のドットが表示
      fraction：分数で表示（例：1 / 3）
      progressbar：スライドの進捗に応じてプログレスバーが伸びる
      custom：自由にカスタマイズ
      
      =====================================================*/

    const heroSwiper = new Swiper(".hero__swiper.--hero", {
        //swiperの名前
        // 切り替えのモーション
        speed: 1000, // 表示切り替えのスピード
        effect: "fade", // 切り替えのmotion (※1)
        fadeEffect: {
            crossFade: true,
        },
        allowTouchMove: true, // スワイプで表示の切り替えを有効に

        // 最後→最初に戻るループ再生を有効に
        loop: true,

        // 自動スライドについて
        autoplay: {
            delay: 3000, // 何秒ごとにスライドを動かすか
            stopOnLastSlide: false, // 最後のスライドで自動再生を終了させるか
            disableOnInteraction: true, // ユーザーの操作時に止める
            reverseDirection: false, // 自動再生を逆向きにする
        },

        // 表示について
        centeredSlides: true, // 中央寄せにする
        slidesPerView: "auto",
        spaceBetween: 30,

        // ページネーション
        pagination: {
            el: ".swiper-pagination.--hero", // paginationのclass
            clickable: true, // クリックでの切り替えを有効に
            type: "fraction", // paginationのタイプ (※2)
        },
    });

    // ***************************************************************/
    //  メインビューのローディング
    // ***************************************************************/
    function hero__loading() {
        setTimeout(function () {
            $(".js-loading").addClass("is-hide");
            setTimeout(function () {
                $(".js-loading").remove();
            }, 800);
        }, 500);
    }

    $(document).ready(hero__loading);
    $(window).on("load", hero__loading);

    // ***************************************************************/
    //  トップへ戻るボタン
    // ***************************************************************/
    jQuery('a[href^="#"]').on("click", function (e) {
        const speed = 300;
        const id = jQuery(this).attr("href");
        const target = jQuery("#" == id ? "html" : id);
        const position = jQuery(target).offset().top;
        jQuery("html, body").animate(
            {
                scrollTop: position,
            },
            speed,
            "swing" // swing or linear
        );
    });

    jQuery(window).on("scroll", function () {
        if (500 < jQuery(window).scrollTop()) {
            jQuery("#js-pagetop").addClass("is-show");

            // フッター手前で止まる用
            const scrollHeight = $(document).height();
            const scrollPosition = $(window).height() + $(window).scrollTop();
            const footHeight = $("footer").innerHeight();

            // 画面幅によって bottom の値を変更
            let footValue = 0;
            let bottomValue;
            if ($(window).width() < 768) {
                footValue = 16;
                bottomValue = "16px";
            } else {
                footValue = 20;
                bottomValue = "20px";
            }

            if (scrollHeight - scrollPosition <= footHeight) {
                $("#js-pagetop").css(
                    {
                        position: "absolute",
                        bottom: footHeight + footValue,
                    }
                );
            }
            else {
                $("#js-pagetop").css(
                    {
                        position: "fixed",
                        bottom: bottomValue,
                    }
                );
            }
        }
        else {
            jQuery("#js-pagetop").removeClass("is-show");
        }
    });
});
