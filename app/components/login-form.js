import Ember from 'ember';

export default Ember.Component.extend({
  loginFailed: false,
  isProcessing: false,
  errorMessage: '',

  actions: {
    login() {
      this.setProperties({
        isProcessing: true,
        loginFailed: false,
        errorMessage: ''
      });

      var username = this.get('username');
      var password = this.get('password');

      if (Ember.isBlank(username)) {
        this.setProperties({
          isProcessing: false,
          loginFailed: true,
          errorMessage: 'Bitte Benutzernamen angeben'
        });
        return;
      }
      if (Ember.isBlank(password)) {
        this.setProperties({
          isProcessing: false,
          loginFailed: true,
          errorMessage: 'Bitte Passwort angeben'
        });
        return;
      }

      this.get('session')
        .authenticate('authenticator:uerc', username, password)
        .then(data => {
          this.setProperties({
            isProcessing: false
          });
          this.get('router').transitionTo('index');
        })
        .catch(json => {
          var msg = json === null ? 'Serverfehler' : json.error === null ? 'Unbekannter Fehler' : json.error.message;
          this.setProperties({
            isProcessing: false,
            loginFailed: true,
            errorMessage: msg
          });
        });
    }
  }
});
