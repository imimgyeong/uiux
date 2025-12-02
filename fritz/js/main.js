/*------------------------------------------------------------------
 * 파일명 : main.js
    - 작성자 : 황난경
    - 작성일 : 2025-12-02
    - 설  명 : 메인페이지에서만 적용되는 js를 저장 (header/footer 제외)
---------------------------------------------------------------------*/

$(document).ready(function(){

    /*----------- 시작 : visual swriper ----------*/
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 5000,
        //     disableOnInteraction: true,
        // },

        //effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */


        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .swiper button.btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .swiper button.btn_prev',  
        },

    });
    /*----------- 끝 : visual swriper ----------*/




})//맨끝 나가기금지