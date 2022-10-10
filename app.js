const container = document.getElementById("grid");

function makeGrid(rows, cols) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  for (let r = 0; r < (rows); r++) {
    let row = document.createElement("div");
    container.appendChild(row).classList = "row";
    row.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = 'lightgray';
      });
    for (let c = 0; c < (cols); c++) {
      let column = document.createElement("div");
      container.appendChild(column).classList = "column";
      column.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = 'lightgray';
        });
      row.appendChild(column);
    }
  };

  let clearBtn = document.getElementById("clearBtn");
  clearBtn.addEventListener("click", () => {
    makeGrid(rows, cols);
    });
}

let gridSize = document.getElementById("gridSize");
  gridSize.addEventListener("click", () => {
    sizePrompt();
  });

function sizePrompt() {
  let row = prompt("Please enter how many rows for the new grid", "16");
  let column = prompt("Please enter how many columns for the new grid", "16");
  console.log(isNaN(row));
  while (isNaN(row) === true || isNaN(column) === true) {
    if (isNaN(row) === true) {
      row = prompt("Please enter a number for rows", "16");
    }
    else if (isNaN(column) === true) {
      column = prompt("Please enter a number for columns", "16");
    }
  }
  if (row < 0 || row > 99) {
    row = prompt("Please enter a number of rows between 0 and 99", "16");
  }
  if (column < 0 || column > 99) {
    column = prompt("Please enter a number of columns between 0 and 99", "16");
  }
  console.log(row);
  console.log(column);
  makeGrid(row, column);
}

makeGrid(16, 16);