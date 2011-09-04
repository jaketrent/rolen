require(["jquery", "log/LogView", 'log/CategoryListView', 'order!lib/underscore', 'order!lib/backbone'], function($, LogView, CategoryListView) {
  require.ready(function () {
    Backbone.sync = function(method, model, success, error){
      success();
    };

    new CategoryListView();
    new LogView();

  });
});
