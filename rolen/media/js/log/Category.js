define(['backbone'], function (Backbone) {
  return Backbone.Model.extend({
    defaults: {
      code: 'cat_code',
      name: 'Category Name'
    }
  });
});