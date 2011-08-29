define(['backbone', 'log/EntryView', 'log/Log', 'lib/jquery.mousewheel'], function (Backbone, EntryView, Log) {
  return Backbone.View.extend({
    el: $('#log'),
    initialize: function () {
      _.bindAll(this, 'render', 'appendEntry');

      this.collection = new Log();
      this.collection.bind('add', this.appendEntry);

      $(this.el).bind('mousewheel', function(event, delta) {
        $(this).css({ "top": (delta > 0 ? "+" : "-") + "=35px" });
      });

      $(this.el).html("");
      this.collection.reset([
        {
          cat: 'engin',
          isFirst: true,
          startDate: '2011-07-01',
          endDate: '2011-08-01',
          title: 'Corus Something',
          desc: 'This is the thing that keeps happening here and there.'
        },{
          cat: 'comp',
          isFirst: false,
          startDate: '2011-07-04',
          endDate: '2011-09-04',
          title: 'Something',
          desc: 'This is the thing that keeps happening This is the thing that keeps happening This is the thing that keeps happening here and there.'
        },{
          cat: 'collab',
          isFirst: true,
          startDate: '2011-10-03',
          title: 'The Future',
          desc: 'This is the thing that keeps happening here and there.'
        }
      ]);
      this.render();
    },
    appendEntry: function(entry){
      var entryView = new EntryView({
          model: entry
        });
      $(this.el).append(entryView.render().el);
    },
    render: function () {
      _(this.collection.models).each(function (entry) {
        this.appendEntry(entry);
      }, this);
      return this;
    }
  });
});