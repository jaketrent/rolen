define(['backbone', 'log/EntryView', 'log/Log'], function (Backbone, EntryView, Log) {
  return Backbone.View.extend({
    el: $('#log'),
    initialize: function () {
      _.bindAll(this, 'render');

      this.collection = new Log();
      this.collection.reset([
        {
          cat: 'engin',
          isFirst: true,
          startDate: '2011-07-01',
          dispStartDate: 'July',
          title: 'Corus Something',
          desc: 'This is the thing that keeps happening here and there.'
        }
      ]);
      this.render();
    },
    render: function () {
      var renderedEntries = '';
      _(this.collection.models).each(function (entry) {
        var entryView = new EntryView({
          model: entry
        });
        renderedEntries += entryView.render().el;
      });
      $(this.el).html(renderedEntries);
    }
  });
});