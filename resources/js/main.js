$(window).scroll(function () {
  const scroll = $(window).scrollTop();
  if (scroll > 300) {
    $("header").addClass("Light");
  } else {
    $("header").removeClass("Light");
  }
});

const nav = document.getElementById("nav");
const backdrop = document.getElementById("backdrop");
const mobileNav = document.getElementById("mobile-nav");
const closeBtn = document.getElementById("close");

const openMobileNav = () => {
  backdrop.classList.remove("backdrop-closed");
  backdrop.classList.add("backdrop-open");
  mobileNav.classList.remove("close");
  mobileNav.classList.add("open");
};

const closeMobileNav = () => {
  backdrop.classList.remove("backdrop-open");
  backdrop.classList.add("backdrop-closed");
  mobileNav.classList.remove("open");
  mobileNav.classList.add("close");
};

nav.addEventListener("click", () => {
  if(window.innerWidth < 1001){
    openMobileNav()
  }
});
backdrop.addEventListener("click", closeMobileNav);
closeBtn.addEventListener("click", closeMobileNav);
