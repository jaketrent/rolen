define(['log/Category', 'order!lib/underscore', 'order!lib/backbone'], function (Category) {
  return Backbone.Collection.extend({
    model: Category
  });
});