import Ember from 'ember';
import moment from 'moment';

const { Route, RSVP } = Ember;

export default Route.extend({

  model(params, { queryParams }) {
    return RSVP.hash({
      categories: this.store.findAll('category'),
      transactions: this.store.query('transaction', {
        start: queryParams['start'],
        end: queryParams['end']
      })
    });
  },

  setupController(controller, model, { queryParams } ) {
    this._super(controller, model);

    this.controller.set('intervalStart', moment(queryParams.start));
    this.controller.set('intervalEnd', moment(queryParams.end));
  }

});
