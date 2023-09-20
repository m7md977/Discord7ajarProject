VanillaTilt.init(document.querySelectorAll(".portfolio__card"), {
  max: 25,
  speed: 400,
});

document.addEventListener("DOMContentLoaded", () => {
  const interBubble = document.querySelector(".interactive");
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  function move() {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(
      curX
    )}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(move);
  }

  window.addEventListener("mousemove", (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
});
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((element) => {
    observer.observe(element);
  });
});

// // random color generator
// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// // Select all <p> elements on the page
// const paragraphs = document.querySelectorAll("p");

// // Loop through each <p> element
// paragraphs.forEach((paragraph) => {
//   // Get the text content of the paragraph
//   const text = paragraph.textContent;

//   // Create a new HTML string with each letter wrapped in a <span> element with a random color
//   const coloredText = text
//     .split("")
//     .map(
//       (letter) => `<span style="color: ${getRandomColor()}">${letter}</span>`
//     )
//     .join("");

//   // Set the HTML content of the paragraph to the colored text
//   paragraph.innerHTML = coloredText;
// });
