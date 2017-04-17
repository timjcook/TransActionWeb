import Ember from 'ember';
import DS from 'ember-data';

const { computed } = Ember;
const { Model, attr, belongsTo } = DS;

export default Model.extend({

  category: belongsTo('category'),

  description: attr('string'),

  date: attr('date'),

  amount: attr('number')

});
