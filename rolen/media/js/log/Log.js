define(["log/Entry", 'order!lib/underscore', 'order!lib/backbone'], function (Entry) {
  return Backbone.Collection.extend({
    model: Entry
  });
});