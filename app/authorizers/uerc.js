import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  authorize(sessionData, block) {
    const token = data['token'];
    block('Authorization', `Token ${token}`);
  }
});
