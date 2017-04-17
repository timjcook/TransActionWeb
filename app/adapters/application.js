import Ember from 'ember';
import DS from 'ember-data';

const { ENV } = Ember;
const { JSONAPIAdapter} = DS;

export default JSONAPIAdapter.extend({

  namespace: ENV.api.namespace

});
