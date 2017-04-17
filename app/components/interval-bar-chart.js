import Ember from 'ember';
import IntervalChart from 'trans-action-web/components/interval-chart';

const { computed } = Ember;

export default IntervalChart.extend({

  labels: computed('intervalStart', 'intervalEnd', function() {
    let date = this.get('intervalStart').clone();
    let labels = [];

    while (date.isSameOrBefore(this.get('intervalEnd'))) {
      labels.pushObject(date.format('DD/MM'));
      date.add(1, 'day');
    }

    return labels;
  }),

  data: computed('transactions.[]', 'intervalStart', 'intervalEnd', function() {
    let date = this.get('intervalStart').clone();
    let data = [];

    let transactionsByDate = null;
    let netAmount = 0;

    while (date.isSameOrBefore(this.get('intervalEnd'))) {
      transactionsByDate = this.get('transactions').filter((t) => {
        return moment(t.get('date')).isSame(date, 'day');
      });
      netAmount = transactionsByDate.mapBy('amount').reduce((a, b) => a + b, 0);

      data.pushObject(netAmount);
      date.add(1, 'day');
    }

    return data;
  })

});
