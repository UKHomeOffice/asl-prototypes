function toggleConditions() {
  var x = document.getElementById("conditions-options");
  var button = document.getElementById("conditions-button");
  if (x.style.display === "none") {
    x.style.display = "block";
    button.innerHTML = 'Add now'
  } else {
    x.style.display = "none";
    button.innerHTML = 'Add more additional conditions'
  }
}
function toggleAuthorisations() {
  var x = document.getElementById("authorisations-options");
  var button = document.getElementById("authorisations-button");
  if (x.style.display === "none") {
    x.style.display = "block";
    button.innerHTML = 'Add now'
  } else {
    x.style.display = "none";
    button.innerHTML = 'Add more authorisations'
  }
}