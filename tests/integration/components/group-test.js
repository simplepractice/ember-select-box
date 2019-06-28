import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { htmlSafe } from '@ember/template';

module('select-box/group', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs`<SelectBox::group />`);

    assert
      .dom('div.select-box-group')
      .exists({ count: 1 }, 'renders with correct class name and tag');
  });

  test('classic: attributes', async function(assert) {
    assert.expect(1);

    await render(hbs`{{select-box/group class="foo"}}`);

    assert.dom('.select-box-group').hasClass('foo', 'attributes are splatted');
  });

  test('classic: style attributes', async function(assert) {
    assert.expect(1);

    this.set('style', htmlSafe('color: red'));

    await render(hbs`{{select-box/group style=this.style}}`);

    assert.dom('.select-box-group').hasAttribute('style', 'color: red');
  });

  test('class prefix', async function(assert) {
    assert.expect(3);

    await render(hbs`<SelectBox::group @classNamePrefix="foo" />`);

    assert.dom('.foo-group').exists({ count: 1 }, 'can override the class prefix');

    assert
      .dom('.foo-group-label')
      .exists({ count: 1 }, 'child group label of a group has the prefix too');

    assert
      .dom('.foo-group-options')
      .exists({ count: 1 }, 'child group options of a group have the prefix too');
  });

  test('label', async function(assert) {
    assert.expect(1);

    await render(hbs`<SelectBox::group @label="Foo" />`);

    assert.dom('.select-box-group-label').hasText('Foo', 'displays the specified group label');
  });

  test('options', async function(assert) {
    assert.expect(1);

    await render(hbs`
      <SelectBox::group>
        <SelectBox::option />
      </SelectBox::group>
    `);

    assert
      .dom('.select-box-group-options .select-box-option')
      .exists({ count: 1 }, 'can display options inside the group');
  });
});
