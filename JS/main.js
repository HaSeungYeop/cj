/* GNB */
const gnbLink = document.querySelectorAll('#gnb .dep1>li')
const gnbDepth2 = [...gnbLink].map(h => h.clientHeight)

const gnbBg = document.querySelector('#gnb')

const gnbDepth2Height = Math.max(...gnbDepth2);
document.documentElement.style.setProperty('--gnb-height',`${gnbDepth2Height + 20}px`)
  
console.log(gnbDepth2Height)

gnbLink.forEach(function(gnb) {
    // const gnbbg = document.createElement('div')
    //     gnbbg.setAttribute('class', 'gnb_bg_test')

    gnb.addEventListener('mouseover', function() {
        gnbBg.classList.add('gnb_bg')
        
        // document.querySelector('header').appendChild(gnbbg)
        
    })
    gnb.addEventListener('mouseout', function() {
        gnbBg.classList.remove('gnb_bg')
        // gnbbg.remove()
    })
})

/* 메인비주얼 스와이퍼 */
const slideDuration = 5000;
document.documentElement.style.setProperty('--slide-duration',`${slideDuration}ms`)

const swiperElm = document.querySelector('.swiper-main')
let isPlaying = true;

const mainSwiper = new Swiper('.swiper-main', {
    effect: 'fade',
    autoplay: {
        delay: slideDuration
    },
    loop: true,
    // navigation: {
    //     nextEL: '.btn_next',
    //     prevEL: '.btn_prev',
    // },
    pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return `
            <div class="progress">
                <div class="bar"></div>
            </div>
            <div class="num">
                <span class="current">0${current} </span>
                <span class="total">/ 0${total}</span>
            </div>
            `
        },
    },
})

/* 맨 위로 이동하는 버튼 */
const btnGotop = document.querySelector('.button_gotop')
const wrap = document.querySelector('#wrap')

btnGotop.addEventListener('click', () => {
    window.scrollTo({
        top: wrap,
        behavior: "smooth"
    })
})
// 안 보이다 스크롤 시 보이게
window.addEventListener('scroll', function() {
    if(window.scrollY > 50) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

/* 헤더 호버 시 dep2 보이게 */
// const header = document.querySelector('header')
// const gnbDep1 = document.querySelectorAll('#gnb .dep1>li')
// const gnbDep2 = document.querySelectorAll('#gnb .dep2')

// gnbDep1.forEach(function(l){
//     l.addEventListener('mouseover', function() {
//         gnbDep2.forEach(function(d) {
//             d.classList.add('dep2_on')
//         })
//     l.addEventListener('mouseout', function() {
//         gnbDep2.forEach(function(d) {
//             d.classList.remove('dep2_on')
//         })
//     })
//     })
// })

/* scroll 시 헤더 스타일 변경  */

console.log(window.scrollY)

window.addEventListener('scroll', function() {
    if(window.scrollY > 50) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

/* 헤더 랭귀지 토글 */

const langBtn = document.querySelector('.lang_wrap button')
const langList = document.querySelector('.lang_wrap ul')
const langIco = document.querySelector('.lang_wrap button i')

// langList.style.display = 'none'
// langBtn.addEventListener('click', function() {
//     if(langList.style.display === 'none') {
//         langList.style.display = 'block'
//     } else {
//         langList.style.display = 'none'
//     }
// })

langBtn.addEventListener('click', function() {
    langList.classList.toggle('active')
    langIco.classList.toggle('active')
})

/* 헤더 검색 */
const searchBtn = document.querySelector('.search_wrap button')
const searchBox = document.querySelector('.search_box') 
const closeBtn = document.querySelector('.ri-close-large-line')

searchBox.style.display = 'none'
searchBtn.addEventListener('click', function() {
    if(searchBox.style.display === 'none') {
        searchBox.style.display = 'block'
    } else {
        searchBox.style.display = 'none'
    }
})
/* x버튼 누를 시 검색 창 사라지게 */
closeBtn.addEventListener('click', function() {
    searchBox.style.display = 'none'
})
closeBtn.addEventListener('mouseover', function() {
    this.classList.add('rotate')
})

/* 브랜드 스와이퍼 */
const brandSwiper = new Swiper('.swiper_brands', {
    autoplay: {
        delay: 0,
        stopOnLastSlide: false,
    },
    speed: 5000,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 50,
});

/* 뉴스 스와이퍼 */
const newsSwiper = new Swiper('.news_swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 50
})

/* Footer 패밀리사이트 */
const famBtn = document.querySelector('.family_site button')
const famList = document.querySelector('.family_site ul')

famBtn.addEventListener('click', function() {
    if(famList.style.display === 'none') {
        famList.style.display = 'block'
    } else {
        famList.style.display = 'none'
    }
})

/* 세계지도 리스트 */
const nationList = document.querySelectorAll('.global_img li')
const nationBox = document.querySelectorAll('.global_img .country_box')




/**
    const swiperContainer = document.querySelector('.swiper-container)
    $('.swiper-container')

 var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    loop:true,
    autoplay: 1000,
    paginationClickable: true
  })
  $('.swiper-container').on('mouseenter', function(e){
    console.log('stop autoplay');
    mySwiper.stopAutoplay();
  })
  $('.swiper-container').on('mouseleave', function(e){
    console.log('start autoplay');
    mySwiper.startAutoplay();
  })
*/