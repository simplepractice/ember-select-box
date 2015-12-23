import Mixin from 'ember-metal/mixin';
import computed from 'ember-computed';
import scrollIntoView from '../../../utils/select-box/scroll-into-view';

export default Mixin.create({
  init(...args) {
    this._super(...args);
    this._deactivateOptions();
  },

  _activateOptionAtIndex(index, scroll) {
    let under = index < 0;
    let over  = index > this.get('options.length') - 1;
    if (!(under || over)) {
      this.set('activeOptionIndex', index);
    }
    if (scroll) {
      this._scrollActiveOptionIntoView();
    }
  },

  _deactivateOptions() {
    this.set('activeOptionIndex', -1);
  },

  _scrollActiveOptionIntoView() {
    scrollIntoView(
      this.get('activeOption.element'),
      this.get('optionsContainer.element')
    );
  },

  activeOption: computed('activeOptionIndex', 'options', function() {
    return this.get('options').objectAt(this.get('activeOptionIndex'));
  }),

  actions: {
    activateOptionAtIndex(index, scroll) {
      this._activateOptionAtIndex(index, scroll);
    },
    activateNextOption(scroll) {
      let next = this.get('activeOptionIndex') + 1;
      this._activateOptionAtIndex(next, scroll);
    },
    activatePreviousOption(scroll) {
      let prev = this.get('activeOptionIndex') - 1;
      this._activateOptionAtIndex(prev, scroll);
    },
    deactivateOptions() {
      this._deactivateOptions();
    }
  }
});
