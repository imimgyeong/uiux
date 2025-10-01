$(document).ready(function(){

     /*
        메뉴에 마우스를 오버하면 header menu_over 클래스를 추가

        header흰색 배경에서 마우스가 밖으로 나가면 header menu_over를 삭제
*/
    $('header .gnb').on('mouseenter', function(){
        // console.log('메뉴에 마우스 오버함')
        $('header').addClass('menu_over')
    })
    $('header .gnb').on('mouseleave', function(){
        // console.log('마우스에서 올렸다가 내림')
        $('header').removeClass('menu_over')
    })
    

    /*  
       이벤트 대상 : header .gnb .gnb_wrap ul.depth1 > li
        결론 1. 마우스를 오버한 1차메뉴 li에 over클래스를 줌
                header.menu_over .gnb .gnb_wrap ul.depth1 > li
             2. 이전에 오버했던 메뉴의 1차메뉴 li에서는 over클래스를 삭제
    */

     $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        $(this).addClass('over')
        // console.log('메뉴에오버')
     })
     $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
        $(this).removeClass('over')
        // console.log('메뉴아웃')
     })

    /*
        조건
        닫힌 메뉴를 클릭하면 열림 (open 클래스 추가)
            --> 다른 열린 메뉴가 있다면 닫음
        열린 메뉴를 클릭하면 닫힘 (open 클래스 삭제)

        ->열린 메뉴와 닫힌 메뉴를 구분하는 방법
            li에 open 있으면 열린 메뉴
            li에 open 없으면 닫힌 메뉴

        결론
        header .gnb .gnb_wrap ul.depth1 > li 에 open클래스가 들어감
    */
     $('header .gnb .gnb_wrap ul.depth1 > li').on('click', function(){
        let open_true = $(this).hasClass('open')
        console.log(open_true)
        if(open_true == true){//열려있다면
            $(this).removeClass('open')
        }else{//닫혀있다면
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')/*딴놈 열려있으면 다 닫아*/
            $(this).addClass('open')
        }
        
     })

     /*
        header .gnb .gnb_open 를 클릭하면 메뉴가 열림
            header에 menu_open 클래스 추가
        header .gnb .gnb_close 를 클릭하면 메뉴가 닫힘
            header에 menu_open 클래스 삭제
     */
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })



})//맨아래 나가지마세요오 ~ 제발요 ~ 