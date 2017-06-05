import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('workitem-assignment-table', 'Integration | Component | workitem assignment table', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{workitem-assignment-table}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#workitem-assignment-table}}
      template block text
    {{/workitem-assignment-table}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
