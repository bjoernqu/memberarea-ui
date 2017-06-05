import Ember from 'ember';

export function profileState([profileState]) {
  if(profileState === 'A') {
    return 'Aktiv';
  } else {
    return 'Passiv';
  }
}

export default Ember.Helper.helper(profileState);
