import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({

  transactions: computed.alias('model.transactions'),

  categories: computed.alias('model.categories')

});
