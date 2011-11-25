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
      _.bindAll(this, 'render', 'editEntry', 'saveEntry', 'showView', 'closeView', 'setModel');
      Backbone.Events.bind('entryEdit', this.editEntry);
    },
    render: function () {
      $(this.el).html(EditViewTmpl());
      Backbone.ModelBinding.bind(this);
      return this;
    },
    editEntry: function (model) {
      this.setModel(model);
      this.render().el;
      this.showView();
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
    showView: function () {
      if($("#pageslide-slide-wrap").width() != 0) {
        return false;
      }
      var width = 350;
      var direction = {left:'-' + width};
      $("#pageslide-content").width(width);
      $("#pageslide-slide-wrap").animate({width: width});
      $("#pageslide-body-wrap").animate(direction);
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