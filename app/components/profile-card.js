import Ember from 'ember';

export default Ember.Component.extend({
  user: null,

  model() {
    var session = this.get('session');
    var token = session.data;

    let url = 'api/user/';
    let requestOptions = {};
    let body = JSON.stringify(data);
    assign(requestOptions, {
      method: 'GET',
      headers: {
        accept: JSON_CONTENT_TYPE,
        'content-type': JSON_CONTENT_TYPE
      }
    });
    fetch(url, requestOptions).then(response => {
      if (response.ok) {
        response.json().then(data => {
          this.set('user', data);
        });
      }
    });
  }
});
