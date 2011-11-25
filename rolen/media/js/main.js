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

    $('.add-btn').click(function () {
      Backbone.Events.trigger('entryEdit', new Entry());
    });

    $(document).keyup(function(e){
      if (e.keyCode == 27) {
        editView.closeView();
      }
    });

    $('#login').couchLogin({
      loggedOut : function(userCtx) {
        window.location = '/rolen-login/_design/rolen/index.html';
      }
    });

  });
});