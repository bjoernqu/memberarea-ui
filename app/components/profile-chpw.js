import Ember from 'ember';

export default Ember.Component.extend({
  loginFailed: false,
  isProcessing: false,
  errorMessage: '',
  infoMessage: '',

  actions: {
    changePassword() {
      this.setProperties({
        isProcessing: true,
        loginFailed: false,
        errorMessage: ''
      });

      var currentPassword = this.get('currentPassword');
      var newPassword_1 = this.get('newPassword_1');
      var newPassword_2 = this.get('newPassword_2');

      if (Ember.isBlank(currentPassword)) {
        this.setProperties({
          isProcessing: false,
          loginFailed: true,
          errorMessage: 'Aktuelles Passwort angeben'
        });
        return;
      }
      if (Ember.isBlank(newPassword_1)) {
        this.setProperties({
          isProcessing: false,
          loginFailed: true,
          errorMessage: 'Neues Passwort angeben'
        });
        return;
      }
      if (newPassword_1 !== newPassword_2) {
        this.setProperties({
          isProcessing: false,
          loginFailed: true,
          errorMessage: 'Passwortwiederholung stimmt nicht'
        });
        return;
      }
    }
  }
});
