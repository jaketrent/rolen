define(['tmpl!log/CategorySummaryView', 'lib/handlebars', 'order!lib/underscore', 'order!lib/backbone'], function (categorySummaryViewTmpl) {
  return Backbone.View.extend({
    el: $("#category-summary"),
    initialize: function () {
      _.bindAll(this, 'render');
      this.model.bind('change', this.render);
      this.render();
    },
    render: function () {
      $(this.el).html(categorySummaryViewTmpl(this.model.toJSON()));
      $("#log li").hide();
      $("#log li[class~=" + this.model.get('code') + "]").show();
      return this; 
    }
  });
});