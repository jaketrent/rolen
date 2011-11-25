define(
  [ 'tmpl!log/EditView'
  , 'order!lib/underscore'
  , 'order!lib/backbone'
  , 'order!lib/backbone.modelbinding.min'
  ], function (EditViewTmpl) {
  return Backbone.View.extend({
    el: '#pageslide-content',
    events: {
      'click .save': 'saveEntry',
      'click .close': 'closeView'
    },
    initialize: function () {
      _.bindAll(this, 'render', 'saveEntry', 'closeView', 'setModel');
    },
    render: function () {
      $(this.el).html(EditViewTmpl());
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
      var direction = ($("#pageslide-slide-wrap").css("left") != "0px") ? {left: "0"} : {right: "0"};
      $("#pageslide-body-wrap").animate(direction);
      $("#pageslide-slide-wrap").animate({width: "0"}, function() {
        $("#pageslide-content").css("width", "0px");
        $('#pageslide-body-wrap, #pageslide-slide-wrap').css('left','');
        $('#pageslide-body-wrap, #pageslide-slide-wrap').css('right','');
      });
    }
  });
});