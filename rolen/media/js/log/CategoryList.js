define(['backbone', 'log/Category'], function (Backbone, Category) {
  return Backbone.Collection.extend({
    model: Category
  });
});