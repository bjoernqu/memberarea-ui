export function initialize(application) {
  // Injects all Ember components with a session object:
  application.inject('component', 'session', 'service:session');
}

export default {
  name: 'component-session-injector',
  initialize: initialize
};
