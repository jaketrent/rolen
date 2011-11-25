require(
  [ 'jquery'
  , 'log/LogView'
  , 'log/CategoryListView'
  , 'log/EditView'
  , 'log/Entry'
  , 'lib/jquery.couch'
  , 'lib/jquery.couchLogin'
  , 'order!lib/underscore'
  , 'order!lib/backbone'
  , 'order!lib/backbone-couchdb'
  ], function($, LogView, CategoryListView, EditView, Entry) {
  require.ready(function () {

    Backbone.couch_connector.config.db_name = 'rolen';
    Backbone.couch_connector.config.ddoc_name = 'rolen';
    Backbone.couch_connector.config.global_changes = false;

    new CategoryListView();
    var logView = new LogView();
    var editView = new EditView();

    $('#pageslide-body-wrap').width($('body').width());
    $(window).resize(function(){
      $('#pageslide-body-wrap').width($('body').width());
    });

    $('.pageslide-btn').click(function () {
      if($("#pageslide-slide-wrap").width() != 0) {
        return false;
      }
      var width = 350;
      var direction = {left:'-' + width};
      $("#pageslide-content").width(width);
      $("#pageslide-slide-wrap").animate({width: width});
      $("#pageslide-body-wrap").animate(direction);
    });

    $('.close').click(closePageSlider);

    function closePageSlider(e) {
      var direction = ($("#pageslide-slide-wrap").css("left") != "0px") ? {left: "0"} : {right: "0"};
      $("#pageslide-body-wrap").animate(direction);
      $("#pageslide-slide-wrap").animate({width: "0"}, function() {
        $("#pageslide-content").css("width", "0px");
        $('#pageslide-body-wrap, #pageslide-slide-wrap').css('left','');
        $('#pageslide-body-wrap, #pageslide-slide-wrap').css('right','');
      });
    }

    $(document).keyup(function(e){
      if (e.keyCode == 27) {
        closePageSlider();
      }
    });
/*

    $('.edit-btn').pageSlide({
      width: '350px',
      direction: 'left',
      initCallback: function () {
        editView = new EditView();
      },
      callback: function () {
        var entry = new Entry();
        logView.addEntry(entry);
        editView.setModel(entry);
        editView.render().el;
      }
    });

*/
    $('#login').couchLogin({
      loggedOut : function(userCtx) {
        window.location = '/rolen-login/_design/rolen/index.html';
      }
    });

  });
});