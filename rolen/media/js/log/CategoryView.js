define(['Backbone', 'tmpl!log/CategoryView', 'lib/handlebars'], function (Backbone, categoryViewTmpl) {
  return Backbone.View.extend({
    tagName: 'li',
    initialize: function () {
      _.bindAll(this, 'render');
      this.model.bind('change', this.render);
    },
    render: function () {
      $(this.el).html(categoryViewTmpl(this.model.toJSON()));
      return this; 
    }
  });
});