define(['Backbone', 'tmpl!log/CategorySummaryView', 'lib/handlebars'], function (Backbone, categorySummaryViewTmpl) {
  return Backbone.View.extend({
    el: $("#category-summary"),
    initialize: function () {
      _.bindAll(this, 'render');
      this.model.bind('change', this.render);
      this.render();
    },
    render: function () {
      $(this.el).html(categorySummaryViewTmpl(this.model.toJSON()));
      return this; 
    }
  });
});