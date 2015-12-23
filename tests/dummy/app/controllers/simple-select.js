import Controller from 'ember-controller';
import { puddings } from '../utils/dummy-data';

export default Controller.extend({
  init() {
    this.set('selectablePuddings', puddings);
  },
  actions: {
    selectedPudding(pudding) {
      this.set('selectedPudding', pudding);
    }
  }
});
