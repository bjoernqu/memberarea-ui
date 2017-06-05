import Ember from 'ember';

export default Ember.Component.extend({
  expanded: false,

  actions: {
    toggleExpanded() {
      this.set('expanded', !this.get('expanded'));
    }
  }
});
