/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

function toggle(btnID, eIDs) {
  // Feed the list of ids as a selector
  var theRows = document.querySelectorAll(eIDs);
  // Get the button that triggered this
  var theButton = document.getElementById(btnID);
  // If the button is not expanded...
  if (theButton.getAttribute("aria-expanded") == "false") {
    // Loop through the rows and show them
    for (var i = 0; i < theRows.length; i++) {
      theRows[i].classList.add("shown");
      theRows[i].classList.remove("hidden");
    }
    // Now set the button to expanded
    theButton.setAttribute("aria-expanded", "true");
    // Otherwise button is not expanded...
  } else {
    // Loop through the rows and hide them
    for (var i = 0; i < theRows.length; i++) {
      theRows[i].classList.add("hidden");
      theRows[i].classList.remove("shown");
    }
    // Now set the button to collapsed
    theButton.setAttribute("aria-expanded", "false");
  }
  $('.newbutton[aria-expanded="true"]').closest('tr').addClass('expandedRow');
  $('.newbutton[aria-expanded="false"]').closest('tr').removeClass('expandedRow');
}
