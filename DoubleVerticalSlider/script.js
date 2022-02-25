const sliderContainer=document.querySelector('.slider-container');
const slideRight=document.querySelector('.right-slide');
const slideLeft=document.querySelector('.left-slide');

const upButton=document.querySelector('.up-button');

const downButton=document.querySelector('.down-button');


//it will give no. of div inside of slide-right
const slidesLength=slideRight.querySelectorAll('div').length;

let activeSlideIndex=0;


//indexing start from zero, that's why here subtracting by 1
//-$,for going up
slideLeft.style.top=`-${(slidesLength-1)*100}vh`;

upButton.addEventListener('click',()=>{
    changeSlide('up');
});

downButton.addEventListener('click',()=>{
    changeSlide('down');
});

const changeSlide=(direction)=>{
    const sliderHeight=sliderContainer.clientHeight;
    if(direction==='up'){
        activeSlideIndex++;
        if(activeSlideIndex>slidesLength-1){
            activeSlideIndex=0;
        }
    }
    else if(direction==='down'){


        activeSlideIndex--;
        if(activeSlideIndex <0){
            activeSlideIndex=slidesLength-1;
        }
    }


// to move up we have to set transform

//set -ve to go right slide up
slideRight.style.transform=`translateY(-${activeSlideIndex * sliderHeight}px)`;

slideLeft.style.transform=`translateY(${activeSlideIndex * sliderHeight}px)`;

}
