define(
  [ 'tmpl!log/EditView'
  , 'lib/jquery.pageslide'
  , 'order!lib/underscore'
  , 'order!lib/backbone'
  ], function (EditViewTmpl) {
  return Backbone.View.extend({
    el: $('#edit'),
    initialize: function () {
      _.bindAll(this, 'render', 'setModel');
      
    },
    setModel: function (entry) {
      this.model = entry;
    },
    render: function () {
      $(this.el).html(EditViewTmpl(this.model.toJSON()));
      $(this.el).pageSlide({ width:'350px' });
      return this;
    }
  });
});