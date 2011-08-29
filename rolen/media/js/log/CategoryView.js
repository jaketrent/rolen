define(['Backbone', 'tmpl!log/CategoryView', 'log/CategorySummaryView', 'lib/handlebars'], function (Backbone, categoryViewTmpl, CategorySummaryView) {
  return Backbone.View.extend({
    tagName: 'li',
    events: {
      'click a': 'showSummary'
    },
    initialize: function () {
      _.bindAll(this, 'render', 'showSummary');
      this.model.bind('change', this.render);
    },
    render: function () {
      $(this.el).html(categoryViewTmpl(this.model.toJSON()));
      return this; 
    },
    showSummary: function () {
      new CategorySummaryView({
        model: this.model
      });
      $("#category-list li").removeClass("active");
      $(this.el).addClass("active");
    }
  });
});