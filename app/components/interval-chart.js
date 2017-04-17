import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({

  bgColour: 'rgba(183, 190, 230, 0.2)',

  borderColour: 'rgba(183, 190, 230, 1)',

  borderWidth: 1,

  label: '',

  chartData: computed('labels', function() {
    return {
      labels: this.get('labels'),
      datasets: [{
        label: this.get('label'),
        data: this.get('data'),
        backgroundColor: [
          this.get('bgColour'),
          this.get('bgColour'),
          this.get('bgColour'),
          this.get('bgColour'),
          this.get('bgColour'),
          this.get('bgColour'),
          this.get('bgColour')
        ],
        borderColor: [
          this.get('borderColour'),
          this.get('borderColour'),
          this.get('borderColour'),
          this.get('borderColour'),
          this.get('borderColour'),
          this.get('borderColour'),
          this.get('borderColour')
        ],
        borderWidth: this.get('borderWidth')
      }]
    };
  })

});
