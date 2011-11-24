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
    new LogView();

    var editView = null;
    $(".edit-btn").pageSlide({
      width: "350px",
      direction: "left",
      callback: function () {
        editView = new EditView();
        editView.setModel(new Entry());
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
