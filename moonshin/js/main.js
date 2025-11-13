/*------------------------------------------------------------------
 * 파일명 : main.js
    - 작성자 : 황난경
    - 작성일 : 2025-11-12
    - 설  명 : 메인페이지에서만 적용되는 js를 저장 (header/footer 제외)
---------------------------------------------------------------------*/

$(document).ready(function(){

    

    
    /*----------- 시작 : visual swiper -----------*/
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 5000,
        //     disableOnInteraction: true,
        // },

        //effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },
    });

    $('.visual .ctrl_btn .stop').on('click', function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .play').show()
        // console.log('정지버튼')
    })
    $('.visual .ctrl_btn .play').on('click', function(){
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .stop').show()
        // console.log('재생버튼')
    })
    /*----------- 끝 : visual swiper -----------*/

    





})//맨끝