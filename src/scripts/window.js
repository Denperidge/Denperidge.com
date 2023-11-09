function random(min, max) {
    // https://www.w3schools.com/JS/js_random.asp
    return Math.floor(Math.random() * (max - min) ) + min;
}

function minimize() {
    const window = document.getElementById("body")
}

function maximize() {

}

function close() {
    const urls = [
        "https://www.youtube.com/watch?v=v1cslkEMOJk",
        "https://www.youtube.com/watch?v=czTksCF6X8Y",
        "https://www.ecosia.org/",
        "https://github.com/Denperidge/",
        "https://www.themanequest.com/",
        "https://www.queeringthemap.com/",
        "https://www.cosmopolitan.com/entertainment/music/a32599/halloween-songs-playlist/"
    ];

    window.location.assign(urls[random(0, urls.length)])
}

function init() {
    const buttons = document.querySelectorAll("header button");
    const funcs = [minimize, maximize, close]
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", funcs[i]);
    }
}
init();