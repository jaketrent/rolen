define(["backbone", "log/handlebars-ext", "tmpl!log/EntryView", "lib/handlebars"], function (Backbone, HandleBarsExt, entryViewTmpl) {
  return Backbone.View.extend({
    tagName: 'li', // name of tag to be created
    // `ItemView`s now respond to two clickable actions for each `Item`: swap and delete.
    events: {
      'click': 'scroll'
    },
    // `initialize()` now binds model change/removal to the corresponding handlers below.
    initialize: function(){
      _.bindAll(this, 'render', 'scroll'); // every function that uses 'this' as the current object should be in here

      this.model.bind('change', this.render);
    },
    // `render()` now includes two extra `span`s corresponding to the actions swap and delete.
    render: function(){
      this.el = entryViewTmpl(this.model.toJSON());
      return this; // for chainable calls, like .render().el
    },
    scroll: function () {
      $(this.el).parent("ul").animate({
        top: -1 * $(this.el).position().top
      });
    }
  });
});