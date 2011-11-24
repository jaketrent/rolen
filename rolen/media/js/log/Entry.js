define(['order!lib/underscore', 'order!lib/backbone'], function () {
  return Backbone.Model.extend({
    defaults: {
      _id: null,
      collection: "log",
      cat: "comp",
      isFirst: false,
      startDate: "2011-01-01",
      dispStartDate: "Jan",
      title: "Log Event",
      desc: "Default desc"
    }
  });
});