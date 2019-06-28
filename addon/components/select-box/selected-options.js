import Component from '@ember/component';
import layout from '../../templates/components/select-box/selected-options';
import Nameable from '../../mixins/general/nameable';
import Registerable from '../../mixins/general/registerable';

const mixins = [Nameable, Registerable];

export default Component.extend(...mixins, {
  layout,
  classNameSuffix: 'selected-options',
  attributeBindings: ['aria-activedescendant', 'style']
});
