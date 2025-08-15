const element = document.querySelector('.typing2');
  const messages = [
    "Frontend Programmer",
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