define(['order!lib/underscore', 'order!lib/backbone'], function () {
  return Backbone.Model.extend({
    defaults: {
      code: 'cat_code',
      name: 'Category Name'
    }
  });
});