define(["backbone", "log/Entry"], function (Backbone, Entry) {
  return Backbone.Collection.extend({
    model: Entry
  });
});