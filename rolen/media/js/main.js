require(["jquery", "backbone", "log/LogView", 'log/CategoryListView'], function($, Backbone, LogView, CategoryListView) {
  require.ready(function () {
    Backbone.sync = function(method, model, success, error){
      success();
    };

    new CategoryListView();
    new LogView();

  });
});
