let dino = document.querySelector("#dino");
document.addEventListener("keydown", (e) => {
  if (
    e.key == " " ||
    (e.key == "ArrowUp" && dino.classList.contains("dinoDown") === false)
  ) {
    dino.classList.toggle("dinoJump");
  } else if (
    e.key == "ArrowDown" &&
    dino.classList.contains("dinoJump") === false
  ) {
    dino.classList.toggle("dinoDown");
  }
});
