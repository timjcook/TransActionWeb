import Ember from 'ember';
import IntervalChart from 'trans-action-web/components/interval-chart';

const { computed, inject } = Ember;

export default IntervalChart.extend({

  store: inject.service(),

  labels: computed('categories.[]', function() {
    return this.get('categories').mapBy('name');
  }),

  data: computed('categories.[]', function() {
    let data = [];

    let transactionsByCategory = [];
    let netAmount = 0;

    this.get('categories').forEach((category) => {
      transactionsByCategory = this.get('transactions').filter((t) => {
        return t.get('category.id') == category.get('id');
      });

      netAmount = transactionsByCategory.mapBy('amount').reduce((a, b) => a + b, 0);
      data.pushObject(netAmount);
    });

    return data;
  })

});
