const container = document.getElementById("grid");

function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let div = document.createElement("div");
    container.appendChild(div).className = "grid-item";
    div.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = 'lightgray';
      });
  };

  let clearBtn = document.getElementById("clearBtn");
  clearBtn.addEventListener("click", () => {
    window.location.reload();
    });

  let gridSize = document.getElementById("gridSize");
  gridSize.addEventListener("click", () => {
    sizePrompt();
  });
}

function sizePrompt() {
  let row = prompt("Please enter how many rows for the new grid", "16");
  let column = prompt("Please enter how many columns for the new grid", "16");
  console.log(isNaN(row));
  while (isNaN(row) === true || isNaN(column) === true) {
    if (isNaN(row) === true) {
      row = prompt("Please a number for rows", "16");
    }
    else if (isNaN(column) === true) {
      column = prompt("Please a number for columns", "16");
    }
  }
  console.log(row);
  console.log(column);
}

makeGrid(16, 16);