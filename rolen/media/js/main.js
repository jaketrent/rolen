require(
  [ "jquery"
  , "log/LogView"
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

    Backbone.couch_connector.config.db_name = "rolen";
    Backbone.couch_connector.config.ddoc_name = "rolen";
    Backbone.couch_connector.config.global_changes = false;

    new CategoryListView();
    var logView = new LogView();
    var editView = null;
    
    $(".edit-btn").pageSlide({
      width: "350px",
      direction: "left",
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

    $("#login").couchLogin({
      loggedOut : function(userCtx) {
        window.location = "/rolen-login/_design/rolen/index.html";
      }
    });

  });
});