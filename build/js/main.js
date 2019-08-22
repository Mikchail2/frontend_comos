(function () {
    var burger = document.querySelector('.mobile-menu-button');
    burger.addEventListener('click', function (e) {
        document.body.classList.toggle('main-menu-opened')
    });
    var arrCount = [];
    var statCount = document.querySelectorAll('.statistics__count');
    statCount.forEach(function(item,index){
        arrCount.push(parseInt(item.innerHTML))
        item.innerHTML = 0;
        animateCount(item,arrCount[index])
    });
    function animateCount(item,countArr){
        var count = 0;
        var step = countArr / 30;
        var timeId = setInterval(()=>{
            count +=step;
            item.innerHTML = parseInt(count);

            if(countArr <= count){
                item.innerHTML = countArr;
                clearInterval(timeId)
            }
        },1000/30)
    }

})();
$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        flipEffect: {
            rotate: 30,
            slideShadows: false,
        },
        effect: 'flip',
        slidesPerView: 1,
        grabCursor: true,
        // slidesPerColumn: 1,
        // If we need paginatizon


        // Navigation arrows
        navigation:
            {
                nextEl: '.gallery__navigation-prev',
                prevEl:
                    '.gallery__navigation-next',
            }
        ,

        // And if we need scrollbar

    });
});


