// Selectors
const paragraphElement = document.querySelector("#paragraph-input");
const highlightedWordElement = document.querySelector("#word-input");
const matchCounter = document.querySelector("#words-counter");
const ignoreCaseElement = document.querySelector("#ignore-case");

function highlighter(event) {
    let result = "";
    let noOfTimesMatchHappen = 0;
    
    const paragraphText = paragraphElement.textContent; // Get raw text
    const inputValue = highlightedWordElement.value.trim(); // Get word to highlight

    console.log(ignoreCaseElement.checked); // Check if ignore case is enabled

    // If input is empty, reset everything
    if (inputValue.length === 0) { 
        paragraphElement.innerText = paragraphText;
        matchCounter.innerText = 0;
        return;
    }

    // Use inputValue directly (no escaping)
    if (ignoreCaseElement.checked) {
        let regX = new RegExp(inputValue, "gi");

        result = paragraphText.replace(regX, (e) => {
            noOfTimesMatchHappen++;
            return `<span class="highlighted-txt">${e}</span>`;
        });

    } else {
        let regX = new RegExp(inputValue, "g");

        result = paragraphText.replace(regX, (e) => {
            noOfTimesMatchHappen++;
            return `<span class="highlighted-txt">${e}</span>`;
        });
    }

    matchCounter.innerText = noOfTimesMatchHappen;
    paragraphElement.innerHTML = result;
}
 
// Event listeners
highlightedWordElement.addEventListener("input", highlighter);
ignoreCaseElement.addEventListener("change", highlighter);
paragraphElement.addEventListener("input", highlighter); // optional


