export default Backbone.View.extend({
  template: JST.order,

  initialize: function(){
    this.listenTo(this.collection, "update", this.subTotal);
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.collection));
  },

  subTotal: function(){
    this.render();
    $('.money').after(JST['order'](this.collection.toJSON()));
  }

});
