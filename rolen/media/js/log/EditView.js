define(
  [ 'tmpl!log/EditView'
  , 'lib/jquery.pageslide'
  , 'order!lib/underscore'
  , 'order!lib/backbone'
  , 'order!lib/backbone.modelbinding.min'
  ], function (EditViewTmpl) {
  return Backbone.View.extend({
    el: '#pageslide-content',
    events: {
      'click .save': 'save'
    },
    initialize: function () {
      _.bindAll(this, 'render', 'setModel', 'save');
    },
    setModel: function (entry) {
      this.model = entry;
    },
    render: function () {
      $(this.el).html(EditViewTmpl());
      $(this.el).pageSlide({ width:'350px' });
      Backbone.ModelBinding.bind(this);
      return this;
    },
    save: function () {
      this.model.save({}, {
        success: function (model, response) {
          alert('Saved!');
          Backbone.Events.trigger('entrySaveSuccess', model);
        },
        error: function (model, response) {
          alert('Error!');
        }
      });
    }
  });
});