import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    invalidateSession() {
      this.get('session').invalidate()
      this.get('router').transitionTo('index')
    }
  }
});
