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

    /*
      Color Hover Effect here because I 
      couldn't think of any other way
      to shorten this function
    */
    div.addEventListener("mouseover", function() {
      let colorOfChoice = document.getElementById("color-picker").value;
      this.style.background = colorOfChoice;
    });
    mainContainer.appendChild(div);
  }
}

function styleBlock(divToStyle, sizeOfPixels) {
  let gridTemplateNumber = "repeat(" + sizeOfPixels + ", 1fr)";
  htmlDocument.style.setProperty("--grid-value", gridTemplateNumber);
  divToStyle.classList.add("block");
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

function changeColor() {
  htmlDocument.style.setProperty("--color", colorOfChoice);
}
