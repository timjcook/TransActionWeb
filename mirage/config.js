import moment from 'moment';
export default function() {

  this.namespace = 'api/v1';

  this.get('/transactions', (schema, request) => {
    let transactions = schema.transactions.all();

    let start = request.queryParams.start;
    let end = request.queryParams.end;

    if (start && end) {
      transactions = transactions.filter(function(t) {
        return moment(start).isSameOrBefore(t.date, 'day') &&  moment(end).isSameOrAfter(t.date, 'day');
      });
    }

    return transactions;
  });

  this.get('/categories', (schema/*, request */) => {
    return schema.categories.all();
  });

  this.get('/categories/:id', (schema, request) => {
    return schema.categories.find(request.params.id);
  });

}
