let show = true;

const menuSection = document.querySelector(".menu-section");

const menuToggle = menuSection.querySelector(".menu-toggle");

const follow = document.querySelector(".follow");

const home = menuSection.querySelector(".home-a");

const about = menuSection.querySelector(".about-a");

const contact = menuSection.querySelector(".contact-a");

menuToggle.addEventListener("click", function () {
  document.body.style.overflow = show ? "hidden" : "initial";
  follow.classList.toggle("hidden", show);
  menuSection.classList.toggle("on", show);
  show = !show;
});

home.addEventListener("click", function () {
  document.body.style.overflow = "initial";
  menuSection.classList.toggle("on", show);
  follow.classList.toggle("hidden", show);
  show = !show;
});

about.addEventListener("click", function () {
  document.body.style.overflow = "initial";
  menuSection.classList.toggle("on", show);
  follow.classList.toggle("hidden", show);
  show = !show;
});

contact.addEventListener("click", function () {
  document.body.style.overflow = "initial";
  menuSection.classList.toggle("on", show);
  follow.classList.toggle("hidden", show);
  show = !show;
});
