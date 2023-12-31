//   caraousel
var swiper = new Swiper(".contentcast .movies-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop:true,
    centeredSlides: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        250: {
            slidesPerView: 2,
        },
        450: {
            slidesPerView: 4,
        },
        650: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 6,
        },
    },
});
//   caraousel


let inputbox = document.querySelector('.inputsearch');

document.querySelector('.inputbox').onclick = () =>{
    inputbox.classList.toggle('active');
}
document.querySelector('.inputsearch #left').onclick = () =>{
    inputbox.classList.remove('active');
}
document.querySelector('.inputsearch #right').onclick = () =>{
    inputbox.classList.remove('active');
}


let inputbox2 = document.querySelector('.inputsearch2');

document.querySelector('.respobtn .bi-search').onclick = () =>{
    inputbox2.classList.toggle('active');
}
document.querySelector('.inputsearch2 #left').onclick = () =>{
    inputbox2.classList.remove('active');
}



let ViewCities = document.querySelector('.Cities1');

document.querySelector('.hidecites1 h6').onclick = () =>{
    ViewCities.classList.toggle('active');
}

window.onscroll = () =>{
    if(window.scrollY > 680){
  document.querySelector('.sehzadaticket').classList.add('active')
    }else{
      document.querySelector('.sehzadaticket').classList.remove('active')
    }
  }






  


const tabItems = document.querySelectorAll('.box');
const tabContentItems = document.querySelectorAll('.tabcontent');

function selectItem(e) {
	removeBorder();
	removeShow();
	this.classList.add('active');
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	tabContentItem.classList.add('show');
}

function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('active');
	});
}

function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});

$(document).ready(function(){
    $(this).addClass('actives').siblings().removeClass('actives');
    $('.buttons').click(function(){
var filter = $(this).attr('data-filter')

if(filter == 'all'){
$('.boxs').show(400)
}else{
    $('.boxs').not('.'+filter).hide(200);
    $('.boxs').filter('.'+filter).show(400);
}
    })
})




const tabitems = document.querySelectorAll('.btn');
const tabContentitems = document.querySelectorAll('.box-container');

function selectItem(e) {
	removeBorder();
	removeShow();
	this.classList.add('btnactive');
	const tabContentitems = document.querySelector(`#${this.id}-content`);
	tabContentitems.classList.add('shows');
}

function removeBorder() {
	tabitems.forEach(item => {
		item.classList.remove('btnactive');
	});
}

function removeShow() {
	tabContentitems.forEach(item => {
		item.classList.remove('shows');
	});
}

tabitems.forEach(item => {
	item.addEventListener('click', selectItem);
});