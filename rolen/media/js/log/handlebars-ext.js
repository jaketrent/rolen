define(['lib/handlebars'], function(){

  function getMonthName(dateString) {
    var months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return months[new Date(Date.parse(dateString)).getMonth()];
  }

  Handlebars.registerHelper('displayDates', function(startDate, endDate) {
    return new Handlebars.SafeString(getMonthName(startDate) +
      (endDate === undefined ?
      "" :
      " <span>- " + getMonthName(endDate) + "</span>"));
  });

});