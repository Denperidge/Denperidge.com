const spans = document.querySelectorAll("#denperidge h1 span");
const explanations = document.querySelectorAll("#denperidge section");

function runOnEverySpan(func) {
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

function onEventLetterColours(e, character) {
    runOnEverySpan((span)=> {
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

    if (e.type == "click") {
        x = 10;
        y = 10;
    } else {
        const pos = e.target.getBoundingClientRect();
        x = 220;
        y= pos.top - 450;
    }
    explanation.style.left = x + "px";
    explanation.style.top = y + "px";
};

function removeLetterColours() {
    runOnEverySpan((span) => {
        span.style.color = "initial";
    });
    hideEveryExplanation();
}



function setupEvents(selector, character) {
    //document.getElementById(selector).addEventListener("mousemove", (e) => { addLetterColours(e, character); });
    // Focusout first, then focus!
    //document.getElementById(selector).addEventListener("focusout", removeLetterColours);
    //document.getElementById(selector).addEventListener("click", (e) => { addLetterColours(e, character); });
    
    document.getElementById(selector).addEventListener("focus", (e) => { onEventLetterColours(e, character); });
    document.getElementById(selector).addEventListener("blur", hideEveryExplanation);
    
    //setupEventsHide("mouseover");
    //setupEventsHide("click");

}

// Hide the title (aside from screenreaders) and other explanations if js is enabled
document.querySelector("#explanation h2").classList.add("sr-only");
hideEveryExplanation();

const hideButtons = document.querySelectorAll("#explanation button");
for (let i = 0; i < hideButtons.length; i++) {
    hideButtons[i].addEventListener("click", hideEveryExplanation);
}

setupEvents("D", characters[0]);
setupEvents("en", characters[1]);
setupEvents("per", characters[2]);
setupEvents("i", characters[2]);
setupEvents("d", characters[3]);
setupEvents("ge", characters[3]);

