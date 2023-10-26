let cmdString = localStorage.getItem('cmdString') || "";

document.getElementById("matConstructor").onsubmit = function(event) {
  event.preventDefault();
  // this is gross but check it out 
  let inputSpace = document.getElementById("inputSpace");
  let errorMessage = document.getElementById('constructError');
  let calcBtn = document.getElementById("calcBtn");

  if (matChecker()) {
    console.log("matrix is good");
    errorMessage.style.visibility = "hidden";
    let xDim = document.getElementById("xDim").value;
    let yDim = document.getElementById("yDim").value;
    matMaker(xDim, yDim);
  } else {
    errorMessage.style.visibility = "visible";
    calcBtn.style.visibility = "hidden";
  }
};

function matChecker() {
  let xDim = document.getElementById("xDim").value;
  let yDim = document.getElementById("yDim").value;

  if (isNaN(parseInt(xDim))) {
    return false;
  }
  if (isNaN(parseInt(yDim))) {
    console.log("y is nan");
    return false;
  }
  return true;
}

function matMaker(xDim, yDim) {
  if (document.body.contains(document.getElementById('matTable'))) {
    document.getElementById('matTable').remove();
  }
  let inputSpace = document.getElementById("inputSpace");
  let tbl = document.createElement('table');
  tbl.id = 'matTable';
  
  // create table with text fields in each cell
  for (let i = 0; i < xDim; i++) {
    const tr = tbl.insertRow();
    for (let j = 0; j < yDim; j++) {
      const td = tr.insertCell();
      var cell = document.createElement("input");
      cell.setAttribute("type", "text");
      td.appendChild(cell);
    }
  }
  inputSpace.appendChild(tbl);

  calcBtn.style.visibility = "visible";
}

function calculate() {
  const tbl = document.getElementById("matTable");
  console.log("got the table");

  // add matrix creation to cmdString
  let cmdString = "Matrix::new(vec![";
  
  // iterate through table
  let xDim = document.getElementById("xDim").value;
  let yDim = document.getElementById("yDim").value;

  for (let i = 0; i < xDim; i++) {
    cmdString += "vec![";
    let row = tbl.rows[i];
    for (let j =0; j < yDim; j++) {
      cmdString+= row.cells[j].querySelector("input").value;
      cmdString += ","
    }
    cmdString = cmdString.slice(0, -1);
    cmdString += "],"
  }
  cmdString = cmdString.slice(0, -1);
  cmdString += "])"
  console.log(cmdString);
  localStorage.setItem('cmdString', cmdString);
}

function operator(operation) {
  if (cmdString.length > 0) {
    switch(operation) {
      case 'det':
        cmdString += '.determinant()';
        break;
      case 'transpose':
        cmdString += '.transpose()';
        break;
      case 'invert':
        cmdString += '.invert()';
        break;
      case 'clear':
        cmdString = "";
        break;
    }
    localStorage.setItem('cmdString', cmdString);
  }
  console.log(cmdString);
}
