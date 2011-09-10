define(['tmpl!log/CategoryView', 'lib/handlebars', 'order!lib/underscore', 'order!lib/backbone'], function (categoryViewTmpl) {
  return Backbone.View.extend({
    tagName: 'li',
    events: {
      'click a': 'filter'
    },
    initialize: function () {
      _.bindAll(this, 'render', 'filter');
      this.model.bind('change', this.render);
    },
    render: function () {
      $(this.el).html(categoryViewTmpl(this.model.toJSON()));
      return this; 
    },
    filter: function () {
      var $this = $(this.el);
      if ($this.hasClass('active')) {
        $("#category-list li").removeClass("active");
        $("#log > li").show();
      } else {
        $this.addClass("active");
        $("#log > li").hide();
        $("#log > li[class ~= '" + this.model.get('code') + "']").show();
      }
    }
  });
});