let movies =[
    {
        name: "falcon and winter soldier",
        des: "ectetur adipisicirepellendus quo est maxime aspeure",
        image:"./images/Img/slider 2.png"
    },
    {
        name: "Loki",
        des:"m ipsum dolor sit amet consectetur adipisicin",
        image: "slider 1.png"
    },
    {
        name: "Wanda Vision",
        des: "Lorem ipsum dolor sit ame. Ullam s aspernatur qui iure",
        image: "/slider 3.png"
    },
    {
        name: "Raya and the last dragon",
        des: "Lorem ipsum dolor sit ame. Ullam s quo est maaturre",
        image: "/Img/slider 4.png"
    },
    {
        name: "Luca",
        des: "Lorem ipsum dolor sit amet consectetu repellma qui iure",
        image:"./slider 5.png"
    }

];
const carousel = document.querySelector(".caraousel");
let sliders = [];
let sliderIndex = 0;//Tract the current slide
const createSlide = () => {
    if(sliderIndex >= movies.length){
        sliderIndex=0;
    }
    // create DOM elemets
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1= document.createElement('h1');
    let p= document.createElement('p');
    // Attaching all element
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[sliderIndex].name));
    p.appendChild(document.createTextNode(movies[sliderIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
    // settings up images
    imgElement.src = movies[sliderIndex].image;
    sliderIndex++;
    // setting elements classname;
    slide.className = 'slider';
    content.className = 'slider-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';
    sliders.push(slide);

//adding sliding efffect
if(sliders.length){
    sliders[0].style.marginLeft=`calc(-${100 * (sliders.length-2)}% - ${30*(sliders.length-2)}px)`;
}
};
for(let i=0;i<3;i++){
    createSlide();
}
setInterval(()=>{
    createSlide();
},3000);

//video Cards

const videoCards=document.querySelectorAll('.video-card');
videoCards.forEach((item)=>{
item.addEventListener('mouseover',()=>{
 let video=item.children[1];
 video.play();
 });
 item.addEventListener('mouseleave',()=>{
    let video=item.children[1];
     video.pause();
});
});
//card sliders
let cardContainers=document.querySelectorAll('.card-container');
let preBtns=document.querySelectorAll('.pre-btn')
let nxtBtns=document.querySelectorAll('.next-btn')
cardContainers.forEach((item,i)=>{
    let containerDimension=item.getBoundingClientRect();
    let containerWidth=containerDimension.width;
    nxtBtns[i].addEventListener('click',()=>{
        item.scrollLeft +=containerWidth -200;
    })
    preBtns[i].addEventListener('click',()=>{
        item.scrollLeft -=containerWidth+200;
    })
})
