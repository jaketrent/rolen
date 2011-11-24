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
      'mouseover .save': 'saveEntry',
      'mouseover .close': 'closeView'
    },
    initialize: function () {
      _.bindAll(this, 'render', 'setModel', 'saveEntry', 'closeView');
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
    saveEntry: function () {
      Backbone.Events.trigger('entrySave', this.model);
    },
    closeView: function () {
      var self = this;
      $.fn.pageSlideClose({
        preprocessor: function(){
          self.destroy();
        }
      });
    }
  });
});