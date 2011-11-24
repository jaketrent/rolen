define(['log/EntryView', 'log/Log', 'lib/jquery.mousewheel', 'order!lib/underscore', 'order!lib/backbone'], function (EntryView, Log) {
  return Backbone.View.extend({
    el: $('#log'),
    initialize: function () {
      _.bindAll(this, 'render', 'appendEntry', 'saveEntry');

      this.collection = new Log();
      this.collection.bind('add', this.appendEntry);
      this.collection.bind('change', this.render);
      this.collection.bind('reset', this.render);

      $(this.el).bind('mousewheel', function(event, delta) {
        $(this).css({ "top": (delta > 0 ? "+" : "-") + "=35px" });
      });

      this.collection.fetch();

      Backbone.Events.bind('entrySave', this.saveEntry);
    },
    saveEntry: function (entry) {
      if (!_.detect(this.collection, function (collEntry) {
        return entry.get('id') === collEntry.get('id');
      })) {
        this.collection.add(entry);
        console.log('Added new entry to collection!');
      }
      entry.save({}, {
        success: function (model, response) {
          alert('Saved!');
        },
        error: function (model, response) {
          alert('Error!');
        }
      });
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