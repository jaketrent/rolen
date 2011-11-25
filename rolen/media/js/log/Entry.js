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
      // todo: impl once I can do it right :)
    },
    isNew: function () {
      return this.get('_id') === undefined;
    }
  });
});