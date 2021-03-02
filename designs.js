//select color input
const color = document.getElementById("colorPicker");

//select size input
const size = document.getElementById("sizePicker");
const table = document.getElementById("pixelCanvas"); //performance optimalisation

//when size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", function(event) {
    event.preventDefault();
    //using input for number of rows to be created
    const height = document.querySelector("#inputHeight").value;
    //using input for number of columns to be created
    const width = document.querySelector("#inputWidth").value;
    table.innerHTML = "";
    makeGrid(height, width);
});

//it creates the HTML table with the dimensions set by user
function makeGrid(height, width) {
    console.log(height);
    console.log(width);

    for (var x = 0; x < height; x++) {
        var row = document.createElement("tr"); //creates the rows
        for (y = 0; y < width; y++) {
            var cell = document.createElement("td"); //creates the columns
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
};

//using the value of the color picker, can be changed
table.addEventListener("click", function(event) {
    if (event.target && event.target.nodeName == "TD") {
        event.target.style.backgroundColor = color.value;
    }
});