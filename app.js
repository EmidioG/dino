let dino = document.querySelector("#dino");
document.addEventListener("keydown", (e) => {
    if (e.key == " " || e.key == "ArrowUp") {
        dino.classList.toggle("ativo");
        console.log(e);
    } else if (e.key == "ArrowDown") {
    }
});
