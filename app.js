let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumnail');

// alert('fdd')
nextDom.onclick = function(){
    showSlider('next')
}
prevDom.onclick = function(){
    showSlider('prev')
}
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
    nextDom.onclick()
}, timeAutoNext)
function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemthumbnail = document.querySelectorAll('.carousel .thumnail .item')

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemthumbnail[0]);
        carouselDom.classList.add('next')
    }
    else{
        let positionLastItem = itemSlider.length -1;
        listItemDom.prepend(itemSlider[positionLastItem])
        thumbnailDom.prepend(itemthumbnail[positionLastItem])
        carouselDom.classList.add('prev')

    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(()=>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runAutoRun)
    runAutoRun = setTimeout(()=>{
        nextDom.onclick()
    }, timeAutoNext)
}