define(['log/EntryView', 'log/Log', 'lib/jquery.mousewheel', 'order!lib/underscore', 'order!lib/backbone'], function (EntryView, Log) {
  return Backbone.View.extend({
    el: $('#log'),
    initialize: function () {
      _.bindAll(this, 'render', 'appendEntry', 'addEntry');

      this.collection = new Log();
      this.collection.bind('add', this.appendEntry);
      this.collection.bind('change', this.render);
      this.collection.bind('reset', this.render);

      $(this.el).bind('mousewheel', function(event, delta) {
        $(this).css({ "top": (delta > 0 ? "+" : "-") + "=35px" });
      });

      this.collection.fetch();
    },
    addEntry: function (entry) {
      this.collection.add(entry);
    },
    appendEntry: function(entry){
      var entryView = new EntryView({
        model: entry
      });
      $(this.el).append(entryView.render().el);
    },
    render: function () {
      this.el.html("");
      _(this.collection.models).each(this.appendEntry);
      return this;
    }
  });
});