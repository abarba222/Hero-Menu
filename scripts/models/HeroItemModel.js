var HeroItemModel = Backbone.Model.extend({

});

var HeroItemCollection = Backbone.Collection.extend({
  url: 'hero.json'
});

export default {HeroItemModel, HeroItemCollection};
