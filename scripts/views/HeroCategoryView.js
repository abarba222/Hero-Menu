import {HeroItemView} from './HeroItemView';

export default Backbone.View.extend({
  template: JST.heroCategory,

  events: {

  },

  initialize: function(options){
    this.category = options.category;
    this.ordersCollection = options.ordersCollection;
    this.render();
  },

  render: function(){
    this.$el.html(JST['heroCategory']({
      'category': this.category
    }));
  },

  renderChildren: function(){
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map(function(child){
      var view = new HeroItemView ({
        model:child,
        ordersCollection: this.ordersCollection
      });
      this.$el.append(view.el);
      return view;
    }.bind(this));

    return this;
  },

  remove: function(){
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  },

  hideItems: function(){
    this.$('.hero-item-hidden').toggleClass('hidden');
  }

});
