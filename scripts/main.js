let mainContainer = document.getElementById("main-wrapper");
let htmlDocument = document.documentElement;
function createGrid() {
  let size = prompt("Please input size of grid");
  let totalBlocks = Math.pow(size, 2);
  let div;

  clearMainDiv();

  for (i = 1; i <= totalBlocks; i++) {
    div = document.createElement("div");
    styleBlock(div, size);
    mainContainer.appendChild(div);
  }

  addHoverEffect();
}

function styleBlock(divToStyle, sizeOfPixels) {
  let gridTemplateNumber = "repeat(" + sizeOfPixels + ", 1fr)";
  let blockSize = sizeOfPixels + "px";
  htmlDocument.style.setProperty("--grid-value", gridTemplateNumber);
  divToStyle.classList.add("block");
}

function addHoverEffect() {
  let blocks = document.querySelectorAll(".block");

  for (i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("mouseover", function() {
      this.classList.add("gridHover");
    });
  }
}

function clearMainDiv() {
  mainContainer.innerHTML = "";
}

function clearGrid() {
  let hoveredElements = document.querySelectorAll(".gridHover");

  for (i = 0; i < hoveredElements.length; i++) {
    hoveredElements[i].classList.remove("gridHover");
  }
}
