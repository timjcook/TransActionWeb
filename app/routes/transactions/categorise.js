import Ember from 'ember';

const { Route, RSVP, computed } = Ember;

export default Route.extend({

  model() {
    return RSVP.hash({
      transactions: this.store.findAll('transaction'),
      categories: this.store.findAll('category')
    });
  }

});
