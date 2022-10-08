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
};

makeGrid(16, 16);