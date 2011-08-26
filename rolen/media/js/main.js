require(["jquery", "backbone", "log/LogView"], function($, Backbone, LogView) {
  require.ready(function () {
    Backbone.sync = function(method, model, success, error){
      success();
    };

    new LogView();

  });
});
