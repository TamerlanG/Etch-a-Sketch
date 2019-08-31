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
  let blocks = document.querySelectorAll(".block");

  for (let i = 0; i < blocks.length; i++) {
    blocks[i].style.background = "#f6fdf9";
  }
}

function startRandomColor() {
  let blocks = document.querySelectorAll(".block");

  for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("mouseover", function() {
      blocks[i].style.background = randomRGB();
    });
  }
}

function randomRGB() {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
}

function startGreyScale() {
  let blocks = document.querySelectorAll(".block");

  for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("mouseover", function() {
      let currentOpacity = blocks[i].style.opacity;
      console.log(currentOpacity);
      blocks[i].style.background = "rgb(0,0,0)";
      if (currentOpacity === "") {
        blocks[i].style.opacity = 0.1;
      } else {
        blocks[i].style.opacity = "calc(" + currentOpacity + " + 0.1)";
      }
    });
  }
}
