define(
  [ 'tmpl!log/EditView'
  , 'order!lib/underscore'
  , 'order!lib/backbone'
  , 'order!lib/backbone.modelbinding.min'
  ], function (EditViewTmpl) {
  return Backbone.View.extend({
    el: '#pageslide-content',
    events: {
      'mouseover .save': 'saveEntry',
      'mouseover .close': 'closeView'
    },
    initialize: function () {
      _.bindAll(this, 'render', 'saveEntry', 'closeView', 'setModel');
    },
    render: function () {
      $(this.el).html(EditViewTmpl());
      $(this.el).pageSlide({ width:'350px' });
      Backbone.ModelBinding.bind(this);
      return this;
    },
    setModel: function (entry) {
      this.model = entry;
    },
    saveEntry: function () {
      this.model.save({}, {
        success: function (model, response) {
          alert('Saved!');
        },
        error: function (model, response) {
          alert('Error!');
        }
      });
    },
    closeView: function () {
      var self = this;
      $.fn.pageSlideClose({
        preprocessor: function(){
          self.model = null;
        }
      });
    }
  });
});