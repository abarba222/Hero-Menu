import {HeroItemView} from './HeroItemView';

export default Backbone.View.extend({

  initialize: function(options){
    this.ordersCollection = options.ordersCollection;
    this.category = options.category;
    this.render();
  },

  render: function(){
    this.renderChildren();
  },

  renderChildren: function(){
    _.invoke(this.children || [], 'remove');
    this.children = this.collection.map(function(child){

      var view = new HeroItemView({
        model: child,
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
  }

});
