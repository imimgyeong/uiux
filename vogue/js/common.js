$(document).ready(function(){
    let mobile_size = 1024 //모바일 메뉴 시작 사이즈
    let window_w //브라우저 넓이
    let device_status //현재 pc인지 mobile인지 구분하는 값

    function device_chk(){
        window_w = $(window).width()
        if(window_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        // console.log(device_status)
    }
    device_chk() //문서가 로딩되었을때 1번실행
    $(window).resize(function(){
        device_chk() //브라우저가 리사이즈 할때마다 1번씩 실행
    })

    /*----------- 시작 : pc버전 메뉴오버 ----------*/
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if( device_status == 'pc'){
            $('header').addClass('menu_pc')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
            $(this).addClass('over')
            $(this).find('.depth2').slideDown()
            
        }
    })
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave ', function(){
        $(this).removeClass('over')
        $(this).find('.depth2').slideUp()
    })
    $('header').on('mouseleave', function(){
        $(this).removeClass('menu_pc')
    })
    $('header .util .search .sch_open').on('foucusin', function(){
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })
     /*----------- 끝 : pc버전 메뉴오버 -----------*/

     /*----------- 시작 : 모바일버전 메뉴오버 -----------*/
     let gnb_open 
     $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
         if( device_status == 'mobile'){
             e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
             gnb_open = $(this).parent().hasClass('open')
             // console.log(gnb_open)
             if(gnb_open == true){ //열려있다면
                 $(this).parent().removeClass('open')
                 $(this).next().slideUp()
             }else{
                 $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                 $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
                 $(this).parent().addClass('open')
                 $(this).next().slideDown()
             }
         }
     });
 
     $('header .gnb .gnb_open').on('click', function(){
         $('header').addClass('menu_mo')
     })
     $('header .gnb .gnb_wrap .gnb_close').on('click', function(){
         $('header').removeClass('menu_mo')
     })
     /*----------- 끝 : 모바일버전 메뉴오버 -----------*/

     /*----------- 시작 :스크롤 시 header에 fixed -----------*/
    let scrolling = $(window).scrollTop()//현재 스크롤된 값
    let prev_scroll //이전에 스크롤된 값
    let diff_scroll //차이 값(diffrent)
    function scroll_chk(){
        prev_scroll = scrolling
        scrolling = $(window).scrollTop()
        diff_scroll = prev_scroll - scrolling 
        // console.log(diff_scroll)
        if(diff_scroll < 0){// 스크롤을 위로 올라간다는 뜻
            $('header').addClass('up')
            // console.log('if?')
        }else{// 아래로 스크롤된다는 뜻
            $('header').removeClass('up')
            // console.log('else?')
        }
        if(scrolling > 0){ //스크롤내림
            $('header').addClass('fixed')
        }else{ //0이거나 0보다 작은경우 (fixed제거)
            $('header').removeClass('fixed')
        }
    }
    scroll_chk() //문서가 로딩되고 단 1번 실행
    $(window).scroll(function(){
        scroll_chk() //스크롤 할때마다 실행
    })
     /*----------- 끝 : 스크롤 시 header에 fixed -----------*/




})//나가지마세욤