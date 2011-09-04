require(["jquery", "log/LogView", 'log/CategoryListView', 'lib/jquery.couch', 'order!lib/underscore', 'order!lib/backbone', 'order!lib/backbone-couchdb'], function($, LogView, CategoryListView) {
  require.ready(function () {

    Backbone.couch_connector.config.db_name = "rolen";
    Backbone.couch_connector.config.ddoc_name = "rolen";
    Backbone.couch_connector.config.global_changes = false;

    new CategoryListView();
    new LogView();

  });
});
