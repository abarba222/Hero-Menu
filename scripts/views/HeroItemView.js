import {OrderModel, OrdersCollection} from '../models/OrderModel';

var HeroView = Backbone.View.extend({
  template: JST.menu,
  className: 'menu-page',
  tagName: 'section',

  initialize: function(){
      this.render();
  },

  render: function(){
    this.$el.html(this.template());
  }
});

var HeroItemView = Backbone.View.extend({
  template: JST.heroItem,

  events: {
    'click .hero-price': 'checkIt'
  },

  initialize: function(options){
    this.ordersCollection = options.ordersCollection;
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  checkIt: function(){
    this.orderModel = new OrderModel();
    this.heroItem = this.model.toJSON();
    var upOne = (this.heroItem.timesOrdered) + 1;

    this.orderModel.set({
      name: this.heroItem.name,
      price: this.heroItem.price
    });
    this.ordersCollection.add(this.orderModel);
  }

});

export default {HeroView, HeroItemView};
