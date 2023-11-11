const spans = document.querySelectorAll("#denperidge h1 span");
const explanations = document.querySelectorAll("#denperidge section");

function onEverySpan(func) {
    for (let i = 0; i < spans.length; i++) {
        func(spans[i]);
    }
}

function hideEveryExplanation() {
    for (let i = 0; i < explanations.length; i++) {
        explanations[i].style.display = "none";
        explanations[i].ariaDisabled = "true";
    }
}

function addLetterColours(e, character) {
    console.log(e)

    onEverySpan((span)=> {
        if (character.colourtext.indexOf(span.id) > -1) {
            span.style.color = character.colour;
        }
    });

    hideEveryExplanation();

    explanation = document.getElementById(character.name);
    explanation.ariaDisabled = false;
    explanation.style.display = "initial";
    explanation.style.position = "absolute";


    let x, y;

    if (e.type == "mousemove") {
        x = e.layerX;
        y = e.layerY + 25;
    } else {
        const pos = e.target.getBoundingClientRect();
        console.log(pos)
        x = pos.left + 50;
        y= pos.top - 350;
    }
    explanation.style.left = x + "px";
    explanation.style.top = y + "px";
};

function removeLetterColours() {
    onEverySpan((span) => {
        span.style.color = "initial";
    });
    hideEveryExplanation();
}

function setupEvents(selector, character) {
    document.getElementById(selector).addEventListener("mousemove", (e) => { addLetterColours(e, character); });
    document.getElementById(selector).addEventListener("focus", (e) => { addLetterColours(e, character); });
    document.getElementById(selector).addEventListener("focusout", removeLetterColours);
    document.addEventListener("mouseover", (e) => {
        if (e.target.parentNode.tagName != "H1") {
            removeLetterColours();
        }
    });

}

// Hide the title (aside from screenreaders) and other explanations if js is enabled
document.querySelector("#explanation h2").classList.add("sr-only");
hideEveryExplanation();

setupEvents("D", characters[0]);
setupEvents("en", characters[1]);
setupEvents("per", characters[2]);
setupEvents("i", characters[2]);
setupEvents("d", characters[3]);
setupEvents("ge", characters[3]);

