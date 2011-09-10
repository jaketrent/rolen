define(['log/CategoryView', 'log/CategoryList', 'order!lib/underscore', 'order!lib/backbone'], function (CategoryView, CategoryList) {
  return Backbone.View.extend({
    el: $('#category-list'),
    initialize: function () {
      _.bindAll(this, 'render', 'appendCategory');

      this.collection = new CategoryList();
      this.collection.bind('add', this.appendCategory);
      this.collection.bind('change', this.render);
      this.collection.bind('reset', this.render);

      this.collection.fetch();
    },
    appendCategory: function(cat){
      var catView = new CategoryView({
        model: cat
      });
      $(this.el).append(catView.render().el);
    },
    render: function () {
      $(this.el).html("");
      _(this.collection.models).each(function (cat) {
        this.appendCategory(cat);
      }, this);
      return this;
    }
  });
});