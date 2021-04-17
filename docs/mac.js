const checkpoint = 200;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll >= checkpoint) {
    opacity = 0;
  } else {
    opacity = 1 - currentScroll / checkpoint;
  }
  document.querySelector(".first-stanza").style.opacity = opacity;
});
