define(['lib/handlebars', 'lib/showdown'], function(){

  var converter = new Showdown.converter();

  function getMonthName(dateString) {
    var months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    var date = Date.parse(dateString);
    return isNaN(date) ? dateString : months[new Date(date).getMonth()];
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