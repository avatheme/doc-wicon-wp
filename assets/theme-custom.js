/**
 * Created by VanDoi on 8/9/2017.
 */
(function ($) {

    $(document).ready(function () {

        var $wa = $('#wpadminbar');
        var $head = $('#header-userguide');

        var margin_top = 0;
        if ($head.height()) {
            margin_top += parseFloat($head.outerHeight());
        }
        if ($wa.height()) {
            margin_top += parseFloat($wa.outerHeight());
            $head.css({
                'top': $wa.outerHeight() + 'px'
            });
        }

        $('#sidebar-left').css({
            'top': margin_top + 'px'
        });

        $('.inner-wrapper').css({
            'padding-top': $head.outerHeight() + 'px'
        });


        $('html').addClass('fixed sidebar-left-sm');


        $('#menu > ul > li').on('click', function () {

            $('#menu > ul .nav-active').removeClass('nav-active');
            $(this).addClass('nav-active');

        });


        // back to top
        // browser window scroll (in pixels) after which the "back to top" link is shown
        var offset = 300,
            //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
            offset_opacity = 1200,
            //duration of the top scrolling animation (in ms)
            scroll_top_duration = 700,
            //grab the "back to top" link
            $back_to_top = $('.cd-top');

        //hide or show the "back to top" link
        $(window).scroll(function(){
            ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
            if( $(this).scrollTop() > offset_opacity ) {
                $back_to_top.addClass('cd-fade-out');
            }
        });

        //smooth scroll to top
        $back_to_top.on('click', function(event){
            event.preventDefault();
            $('body,html').animate({
                    scrollTop: 0 ,
                }, scroll_top_duration
            );
        });

        // show menu in mobile
        $('.show-menu-mobile').on('click', function () {
            $('.inner-wrapper').addClass('show-menu');

        });

        $('.overlay-mobile').on('click', function () {
            $('.inner-wrapper').removeClass('show-menu');
        });

        if ($(window).width() < 600) {

            if ($wa.height()) {
                $(window).on('scroll', function () {
                    var ws = $(window).scrollTop();
                    if (ws > 0) {
                        $('#header-userguide').css({
                            'top': '0'
                        });
                    }else {
                        $('#header-userguide').css({
                            'top': $wa.height() + 'px'
                        });
                    }
                });
            }

        }

        if ($(window).width() < 768) {
            $('.inner-wrapper .no-post').css({
                'margin-top' : $head.outerHeight() + 'px'
            });
        }						if($(window).width() == 768){			if($wa.height()){				$('#sidebar-left').css({					'margin-top' : '46px'				});			}					}

    });

})(jQuery);