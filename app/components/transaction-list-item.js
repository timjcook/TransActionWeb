import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({

  actions: {
    selectCategory(category) {
      this.set('transaction.category', category);
    }
  }

});
