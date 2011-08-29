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
          name: 'Competency &amp; Productivity',
          progress: 'I\'ve gotten this far'
        },{
          code: 'prob',
          name: 'Organization &amp; Problem Solving',
          progress: 'I\'ve gotten this far 2'
        },{
          code: 'engin',
          name: 'Engineering &amp; Excellence',
          progress: 'I\'ve gotten this far 3'
        },{
          code: 'collab',
          name: 'Collaboration',
          progress: 'I\'ve gotten this far 4'
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