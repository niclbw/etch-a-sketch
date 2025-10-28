let squaresPerSide = 16;
let numSquares = squaresPerSide * squaresPerSide;

const container = document.querySelector("#container");

for (let i = 0; i < numSquares; i++) {
    const div = document.createElement("div");
    div.style.flex = `0 0 calc(100% / ${squaresPerSide})`;
    div.style.boxSizing = `border-box`;
    div.style.border = "1px solid black";
    container.appendChild(div);
}