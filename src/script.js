// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//blob animation versi dulu

// const pathElement = document.getElementById("animatedPath");
// const pathValues = [
//   "M45.4,-77.2C58.6,-71,68.8,-58.3,76.2,-44.4C83.7,-30.4,88.4,-15.2,87.8,-0.3C87.3,14.6,81.5,29.1,73.8,42.8C66.2,56.4,56.7,69,44.1,76.3C31.4,83.6,15.7,85.5,0.8,84.2C-14.2,82.9,-28.4,78.4,-41,71.1C-53.6,63.8,-64.6,53.7,-70.7,41.4C-76.7,29.1,-77.8,14.6,-79.3,-0.8C-80.7,-16.2,-82.5,-32.4,-77.1,-45.9C-71.7,-59.3,-59.1,-70,-45.1,-75.6C-31,-81.2,-15.5,-81.9,0.3,-82.4C16.1,-82.9,32.2,-83.3,45.4,-77.2Z",
//   "M45.2,-78.6C58.5,-70.6,69.2,-58.4,73.9,-44.6C78.7,-30.7,77.4,-15.4,77.5,0C77.6,15.4,78.9,30.9,72.5,41.8C66.2,52.8,52.1,59.3,38.7,66.5C25.3,73.8,12.7,81.8,0,81.8C-12.6,81.8,-25.3,73.7,-37,65.5C-48.6,57.3,-59.3,48.8,-66.6,37.9C-73.9,26.9,-77.9,13.5,-80,-1.2C-82,-15.8,-82.1,-31.6,-76.7,-46C-71.4,-60.5,-60.7,-73.5,-47,-81.3C-33.3,-89,-16.7,-91.5,-0.4,-90.9C15.9,-90.2,31.9,-86.6,45.2,-78.6Z",
//   "M39.7,-69.7C52.1,-61.6,63.3,-52.3,70.7,-40.5C78,-28.7,81.5,-14.3,82.1,0.3C82.6,15,80.2,29.9,73.6,43.1C67.1,56.3,56.3,67.6,43.3,74.4C30.4,81.2,15.2,83.4,1.3,81.2C-12.6,78.9,-25.2,72.2,-37.2,64.9C-49.1,57.5,-60.4,49.4,-67.6,38.5C-74.7,27.6,-77.9,13.8,-80,-1.2C-82.1,-16.2,-83.1,-32.4,-77.5,-45.9C-71.8,-59.4,-59.3,-70.3,-45.2,-77.4C-31.2,-84.6,-15.6,-88.1,-1,-86.4C13.6,-84.7,27.3,-77.8,39.7,-69.7Z",

// ];

// let currentIndex = 0;

// function animatePath() {
//   pathElement.setAttribute("d", pathValues[currentIndex]);
//   currentIndex = (currentIndex + 1) % pathValues.length;
// }

// setInterval(animatePath, 500); // Contoh: setiap 2 detik

// versi bagus:

