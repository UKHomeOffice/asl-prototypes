window.onload = function (){
  // Todays date

  if (document.getElementsByClassName('date-today') != null) {
    var todaysDate = moment().format("D MMMM YYYY");
   var elements =  document.getElementsByClassName('date-today');  
    
        for(var i = 0, length = elements.length; i < length; i++) {
        elements[i].innerHTML = todaysDate;
    }
  }
  
  if (document.getElementsByClassName('date-1-week') != null) {
  // //  1 weeks from today
  var date8Weeks = moment().add(7, 'd').format("D MMMM YYYY");
  var elements = document.getElementsByClassName('date-1-week');
  
      for(var i = 0, length = elements.length; i < length; i++) {
        elements[i].innerHTML = date8Weeks;
    }
  }


  if (document.getElementsByClassName('date-28-days') != null) {
    // //  28 days from today
    var date8Weeks = moment().add(28, 'd').format("D MMMM YYYY");
    var elements = document.getElementsByClassName('date-28-days');

    for(var i = 0, length = elements.length; i < length; i++) {
        elements[i].innerHTML = date8Weeks;
    }
  }
  
//   if (document.getElementsByClassName('date-8-weeks') != null) {
//   // //  8 weeks from today
//   var date8Weeks = moment().add(8, 'w').format("D MMMM YYYY");
//   document.getElementsByClassName('date-8-weeks').innerHTML = date8Weeks;
//   }

//   if (document.getElementsByClassName('date-2-days') != null) {
//   // //  8 weeks from today
//   var date8Weeks = moment().add(2, 'd').format("D MMMM YYYY");
//   document.getElementsByClassName('date-2-days').innerHTML = date8Weeks;
//   }
//   if (document.getElementsByClassName('date-17-days') != null) {
//   // //  8 weeks from today
//   var date8Weeks = moment().add(17, 'd').format("D MMMM YYYY");
//   document.getElementsByClassName('date-17-days').innerHTML = date8Weeks;
//   }

  if (document.getElementsByClassName('date-1-day-ago') != null) {
  // // //  1 day ago
  var date1DayAgo = moment().subtract(1, 'd').format("D MMMM YYYY");
  var elements = document.getElementsByClassName('date-1-day-ago');
  
      for(var i = 0, length = elements.length; i < length; i++) {
        elements[i].innerHTML = date1DayAgo;
    }
  }
  
  if (document.getElementsByClassName('date-1-week-ago') != null) {
  // // // //  1 week ago
  var date1WeekAgo = moment().subtract(1, 'w').format("D MMMM YYYY");
  var elements = document.getElementsByClassName('date-1-week-ago');
  
      for(var i = 0, length = elements.length; i < length; i++) {
        elements[i].innerHTML = date1WeekAgo;
    }
  }

  if (document.getElementsByClassName('date-8-weeks-ago') != null) {
  //  8 weeks ago
  var date8WeeksAgo = moment().subtract(8, 'w').format("D MMMM YYYY");
  var elements = document.getElementsByClassName('date-8-weeks-ago');
  
      for(var i = 0, length = elements.length; i < length; i++) {
        elements[i].innerHTML = date8WeeksAgo;
    }
  }
}
