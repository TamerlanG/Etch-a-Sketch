function createGrid() {
  let size = prompt("Please input size of grid");
  let totalBlocks = Math.pow(size, 2);
  let mainContainer = document.getElementById("main-wrapper");
  let div;

  for (i = 1; i <= totalBlocks; i++) {
    div = document.createElement("div");
    styleBlock(div, size);
    mainContainer.appendChild(div);
  }
}

function styleBlock(divToStyle, sizeOfPixels) {
  divToStyle.classList.add("block");
}
