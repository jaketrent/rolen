define(["log/handlebars-ext", "tmpl!log/EntryView", "lib/handlebars", 'order!lib/underscore', 'order!lib/backbone'], function (HandleBarsExt, entryViewTmpl) {
  return Backbone.View.extend({
    tagName: 'li',
    className: 'entry',
    events: {
      'click': 'scroll',
      'dblclick': 'editEntry'
    },
    initialize: function() {
      _.bindAll(this, 'render', 'scroll', 'editEntry');

      this.model.bind('change', this.render);
    },
    render: function(){
      var $el = $(this.el);
      $el.html(entryViewTmpl(this.model.toJSON()));
      if (this.model.get('isFirst')) {
        $el.addClass('first');
      }
      $el.addClass(this.model.get('cat'));
      $el.attr('data-id', this.model.get('_id'));
      return this;
    },
    scroll: function () {
      $(this.el).parent("ul").animate({
        top: -1 * $(this.el).position().top
      });
    },
    editEntry: function () {
      Backbone.Events.trigger('entryEdit', this.model);
    }
  });
});