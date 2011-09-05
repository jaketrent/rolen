define(['lib/handlebars', 'lib/showdown'], function(){

  var converter = new Showdown.converter();

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

  Handlebars.registerHelper('markdown', function(text) {
    return new Handlebars.SafeString(converter.makeHtml(text));
  });

});