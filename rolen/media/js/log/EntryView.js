define(["backbone", "tmpl!log/EntryView", "lib/handlebars"], function (Backbone, entryViewTmpl) {
  return Backbone.View.extend({
    tagName: 'li', // name of tag to be created
    // `ItemView`s now respond to two clickable actions for each `Item`: swap and delete.
    /*events: {
      'click span.swap':  'swap',
      'click span.delete': 'remove'
    },*/
    // `initialize()` now binds model change/removal to the corresponding handlers below.
    initialize: function(){
      _.bindAll(this, 'render'); // every function that uses 'this' as the current object should be in here

      this.model.bind('change', this.render);
    },
    // `render()` now includes two extra `span`s corresponding to the actions swap and delete.
    render: function(){
      $(this.el).html(entryViewTmpl(this.model.toJSON()));
      return this; // for chainable calls, like .render().el
    }
  });
});