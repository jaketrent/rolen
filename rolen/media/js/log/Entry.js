define(['order!lib/underscore', 'order!lib/backbone'], function () {
  return Backbone.Model.extend({
    defaults: {
      collection: "log",
      cat: "comp",
      isFirst: false,
      startDate: "",
      title: "",
      desc: ""
    },
    url: '/log'
  });
});