define(['backbone', 'log/CategoryView', 'log/CategoryList'], function (Backbone, CategoryView, CategoryList) {
  return Backbone.View.extend({
    el: $('#category-list'),
    initialize: function () {
      _.bindAll(this, 'render', 'appendCategory');

      this.collection = new CategoryList();
      this.collection.bind('add', this.appendCategory);
      this.collection.reset([
        {
          code: 'comp',
          name: 'Competency &amp; Productivity'
        },{
          code: 'prob',
          name: 'Organization &amp; Problem Solving'
        },{
          code: 'engin',
          name: 'Engineering &amp; Excellence'
        },{
          code: 'collab',
          name: 'Collaboration'
        }
      ]);
      this.render();
    },
    appendCategory: function(cat){
      var catView = new CategoryView({
        model: cat
      });
      $(this.el).append(catView.render().el);
    },
    render: function () {
      _(this.collection.models).each(function (cat) {
        this.appendCategory(cat);
      }, this);
      return this;
    }
  });
});