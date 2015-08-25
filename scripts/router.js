import {HeroView, HeroItemView} from './views/HeroItemView';
import {HeroItemModel, HeroItemCollection} from './models/HeroItemModel';
import HeroItemsView from './views/heroItemsView';
import OrderView from './views/OrderView';
import {OrdersCollection} from './models/OrderModel';
import HeroCategoriesView from './views/HeroCategoriesView';
import HeroCategoryView from './views/HeroCategoryView';


var Router = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  initialize: function(){
    this.heroItemCollection = new HeroItemCollection();
    this.ordersCollection = new OrdersCollection();
  },

  index: function(){
    $('.app').html(new HeroView().el);

    this.heroItemCollection.fetch().then(function(){
      $('.menu').html(new HeroCategoriesView({

        collection: this.heroItemCollection,
        ordersCollection: this.ordersCollection
      }).el);

      $('.order').html(new OrderView({collection: this.ordersCollection}).el);
    }.bind(this));
  }

});

export default new Router();
