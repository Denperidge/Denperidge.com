const revealmores = document.querySelectorAll(".revealmore li");

console.log(revealmores)

function hideAll() {
    for (let i = 0; i < revealmores.length; i++) {
        revealmores[i].classList.remove("show");
    }
}

for (let i = 0; i < revealmores.length; i++) {
    revealmores[i].addEventListener("click", (e) => {
        const target = e.target.tagName == "LI" ? e.target : e.target.parentNode;
        const isAlreadyShown = target.classList.contains("show");
        hideAll();
        if (!isAlreadyShown) {
            target.setAttribute("class", "show");
        }
    });
}

hideAll();
