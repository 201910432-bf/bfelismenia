//typewriter effect
export const Typewriter = () => {
  console.log("hello");
  const texts = ["Web Apps", "Illustration", "Designs"];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";
  (async function typewriterEffect() {
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
      await sleep(2000);
      count++;
      index = 0;
    }

    setTimeout(typewriterEffect, 200);
  })();

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
};

//for scroll listener

// const titles = document.querySelectorAll(".anim");

// observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("animate");
//     } else {
//       entry.target.classList.remove("animate");
//     }
//   });
// });

// titles.forEach((title) => {
//   observer.observe(title);
// });
