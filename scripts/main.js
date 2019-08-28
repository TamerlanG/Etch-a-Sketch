function createGrid() {
  let size = prompt("Please input size of grid");
  let totalBlocks = Math.pow(size, 2);
  let mainContainer = document.getElementById("main-wrapper");
  let div;

  for (i = 0; i < totalBlocks; i++) {
    div = document.createElement("div");
    styleBlock(div, size);
    mainContainer.appendChild(div);
  }
}

function styleBlock(divToStyle, sizeOfPixels) {
  let gridStylesheets = document.styleSheets[1];
  divToStyle.style.width = sizeOfPixels + "px";
  divToStyle.style.height = sizeOfPixels + "px";
  divToStyle.classList.add("block");
}
