const cube = document.getElementById("cube");
const title = document.getElementById('inicio-title');

window.addEventListener("scroll", () => {
  // Background
  const scrollTop = window.scrollY;
  const rotateX = scrollTop * 0.1;
  const rotateY = scrollTop * 0.2;
  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  // Titulo
  const scrollY = window.scrollY;
  const maxScroll = window.innerHeight; // até 1 tela de altura
  const progress = Math.min(scrollY / maxScroll, 1); // 0 → 1

  // let blur = 0;
  // if (progress > 0.5) {
  //   blur = progress * 5;
  // }
  const translateY = progress * 500;
  const scale = 1 + progress * -1;

  // let opacity = 1;
  // if (progress > 0.5) {

  //   opacity = 1 - progress * 2;
  // }

  // title.style.filter = `blur(${blur}px)`;
  title.style.transform = `translateY(${translateY}px) scale(${scale})`;
  // title.style.opacity = opacity;

});
