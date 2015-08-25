import {HeroItemView} from './HeroItemView';
import HeroItemsView from './heroItemsView';
import HeroCategoryView from './HeroCategoryView';

export default Backbone.View.extend({

  initialize: function(options){
    this.ordersCollection = options.ordersCollection;
    this.render();
  },

  render: function(){

    _.each(this.collection.groupBy('category'), function(items, category){
      this.newCollection = new Backbone.Collection(items);
      this.$el.append(new HeroCategoryView({
        collection: this.newCollection,
        category: category,
        ordersCollection: this.ordersCollection
      }).el);

    }.bind(this));

  }

});
