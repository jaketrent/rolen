define(['order!lib/underscore', 'order!lib/backbone'], function () {
  return Backbone.Model.extend({
    defaults: {
      collection: "log",
      cat: "comp",
      isFirst: false,
      startDate: "2011-01-01",
      dispStartDate: "Jan",
      title: '',
      desc: ''
    },
    url: '/log',
    validate: function(attrs) {
      if (attrs.title && attrs.title.length < 3) {
        return "Must enter title";
      }
      if (attrs.desc && attrs.desc.length < 3) {
        return "Must enter description";
      }
      if (attrs.startDate && attrs.startDate.length < 3) {
        return "Must enter start date";
      }
    }
  });
});