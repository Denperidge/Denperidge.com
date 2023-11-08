const spans = document.querySelectorAll("#denperidge h1 span");

tooltipData = {
    "Dendy": {
        colour: "aqua",
        text: "Dendy, from OK K.O.!"
    },
    "entrapta": {
        colour: "purple",
        text: "Entrapta, from She-Ra!",
    },
    "peridot": {
        colour: "green",
        text: "Peridot, from Steven Universe!"
    },
    "pidge": {
        colour: "lime",
        text: "Pidge, from Voltron!"
    }
}


function onLetterEnter(selector, key) {
    document.getElementById(selector).addEventListener("mouseover", function(){
        for (let i = 0; i < spans.length; i++) {
            const span = spans[i];
            if (key.indexOf(span.id) > -1) {
                span.style.color = tooltipData[key].colour;
            }
        }
    });
}

function showTooltip(selector) {
    document.addEventListener("mousemove", function(e){
        console.log(e)
    });
}

function tooltip(selector, key) {
    onLetterEnter(selector, key)
    showTooltip(selector)
}

onLetterEnter("D", "Dendy");
onLetterEnter("en", "entrapta");
onLetterEnter("per", "peridot");
onLetterEnter("i", "peridot");
onLetterEnter("d", "pidge");
onLetterEnter("ge", "pidge");

