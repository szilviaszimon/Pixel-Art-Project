//Select color input

const color = document.getElementById("colorPicker");

//Select size input
const size = document.getElementById("sizePicker");
const table = document.getElementById("pixelCanvas");

//When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('click', function(event) {
    event.preventDefault();
    const height = document.querySelector("#inputHeight").value;
    const width = document.querySelector("#inputWidth").value;
    table.innerHTML = ""
    makeGrid(height, width);
});

function makeGrid (height, width) {
    console.log(height);
    console.log(width);

//Create the rows

    for (var x=0; x<height; x++) {
        var row = document.createElement("tr");
        for (y=0; y<width; y++) {
            var cell = document.createElement("td");
            row.appendChild(cell);
            cell.addEventListener("click", function (event) {
                cell.style.backgroundColor = color.value;
            });
    }
    table.appendChild(row);
  }
}