const element = document.querySelector('.typing2');
  const messages = [
    "Frontend Programmer (React)",
    "ui ux designer",
    "an article writer"
  ];

  let index = 0;

  function typeMessage(message, callback) {
    let charIndex = 0;
    element.textContent = "";
    const typing = setInterval(() => {
      if (charIndex < message.length) {
        element.textContent += message[charIndex];
        charIndex++;
      } else {
        clearInterval(typing);
        setTimeout(callback, 1500); // wait before next message
      }
    }, 20); // typing speed
  }

  function loopMessages() {
    typeMessage(messages[index], () => {
      index = (index + 1) % messages.length;
      loopMessages();
    });
  }

  loopMessages();







  var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,

  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },

  breakpoints:{
    768:{
      slidesPerView:2,
    },

    1024:{
      slidesPerView:3,
    }
  }
});


// popup

function openPopup(src){
  document.getElementById("popup").style.display="flex";
  document.getElementById("popup-img").src=src;
}

function closePopup(){
  document.getElementById("popup").style.display="none";
}
