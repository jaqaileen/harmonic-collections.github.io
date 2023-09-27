const bg = document.querySelector(".parallax-bg");
const bg_width = bg.clientWidth;
const bg_height = bg.clientHeight;
const maxLeft = bg_width - window.innerWidth;
const maxTop = bg_height - window.innerHeight;
let x = 0;
let y = 0;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    if (x <= -maxLeft && y <= -maxTop) return;
    x -= 40;
    // If its on maxLeft, then it should go down instead of right
    if (x < -maxLeft && y > -maxTop) {
      x = -maxLeft;
      y -= 40;
      if (y < -maxTop) y = -maxTop;
    }
  } else if (e.key === "ArrowLeft") {
    x += 40;
    if (x > 0) x = 0;
  } // Now up and down should only work if we are on maxLeft
  else if (e.key === "ArrowDown" && x === -maxLeft) {
    y -= 40;
    if (y < -maxTop) {
      y = -maxTop;
    }
  } else if (e.key === "ArrowUp" && x === -maxLeft) {
    y += 40;
    if (y > 0) {
      y = 0;
    }
  }

  bg.style.transform = `translate(${x}px, ${y}px)`;
});
