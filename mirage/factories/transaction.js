import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  description() {
    return faker.hacker.phrase();
  },

  date() {
    return faker.date.between('2016-12-12', '2016-12-19');
  },

  amount() {
    return faker.finance.amount();
  }

});
