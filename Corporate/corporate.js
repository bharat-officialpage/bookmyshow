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
//   caraousel
var swiper = new Swiper(".caraousel-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//   caraousel
//   caraousel
var swiper = new Swiper(".contentCrew .movies-slider", {
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

//   caraousel
var swiper = new Swiper(".movies-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    centeredSlides: true,
    loop: true,
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



  (function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()








