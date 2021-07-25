const menu = document.querySelector(".hamburger-wrapper");
const linksWrapper = document.querySelector(".links-wrapper");
const lines = document.querySelectorAll(".line");
const links = document.querySelectorAll(".links a");
let hidden = true;

menu.addEventListener("click", () => {
  if (hidden == true) {
    linksWrapper.style.transform = `translateY(50vh)`;
    lines[0].style.opacity = "0";
    lines[2].style.opacity = "0";
    hidden = false;
  } else {
    linksWrapper.style.transform = `translateY(-50vh)`;
    lines[0].style.opacity = "1";
    lines[2].style.opacity = "1";
    hidden = true;
  }
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 1024) {
      linksWrapper.style.transform = `translateY(-50vh)`;
      lines[0].style.opacity = "1";
      lines[2].style.opacity = "1";
      hidden = true;
      console.log("link");
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    linksWrapper.style.transform = `translateY(0)`;
  }
});
