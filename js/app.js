document.getElementById("matConstructor").onsubmit = function(event) {
  event.preventDefault();
  if (matChecker()) {
    console.log("matrix is good");
  }
};

function matChecker() {
  xDim = document.getElementById("xDim");
  yDim = document.getElementById("yDim");

  //TODO this sucks and is broken
  if (isNaN(parseInt(xDim)) || isNaN(parseFloat(xDim))) {
    console.log("x is nan");
    return false;
  }
  if (isNaN(parseInt(yDim)) || isNaN(ParseFloat(yDim))) {
    console.log("y is nan");
    return false;
  }
  return true;
}
