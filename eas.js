const container = document.querySelector("#parent-container");
const popupBtn = document.querySelector(".button-popup");

function generateGrid(squaresPerSide=16) {
    let numSquares = squaresPerSide ** 2;
    for (let i = 0; i < numSquares; i++) {
        const div = document.createElement("div");
        div.style.flex = `0 0 calc(100% / ${squaresPerSide})`;
        div.style.boxSizing = `border-box`;
        // div.style.border = "1px solid black";
        div.classList.add("inner-container");
        container.appendChild(div);
    }
}

container.addEventListener('mouseenter', (e) => {
    if (e.target.classList.contains("inner-container")) {
        e.target.style.backgroundColor = "black";
    }
}, true);

popupBtn.addEventListener('click', () => {
    let userInput = prompt("Please enter the number of squares per side:")
    if (parseInt(userInput) < 100) {
        const divs = document.querySelectorAll(".inner-container");
        [...divs].forEach(divs => divs.remove());
        generateGrid(userInput);
    } else {
        alert("You have entered an invalid input. Make sure the number of squares is <100.");
    }
})

generateGrid();