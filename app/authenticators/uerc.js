import Ember from 'ember';
import BaseAuthenticator from 'ember-simple-auth/authenticators/base';
import fetch from 'fetch';

const { RSVP: { Promise }, isEmpty, run, assign: emberAssign, merge } = Ember;
const assign = emberAssign || merge;

const JSON_CONTENT_TYPE = 'application/json';

export default BaseAuthenticator.extend({

  serverLoginEndpoint: '/api/users/login',
  serverCheckEndpoint: '/api/users/checkSession',


  restore(data) {
    if(!isEmpty(data.user.token)) {
      return new Promise((resolve, reject) => {
        const options = {
          url: this.get('serverCheckEndpoint'),
          headers: {
            Authorization: 'Token ' + data.user.token
          }
        }
        this.makeRequest({}, options).then((response) => {
          if (response.ok) {
            run(null, resolve, data)
          } else {
            run(null, reject, null)
          }
        })
      })
    } else {
      return Promise.reject()
    }
  },

  authenticate(username, password) {
    return new Promise((resolve, reject) => {
      const data = {
        user: {
          username: username,
          password: password
        }
      }

      this.makeRequest(data).then((response) => {
        if (response.ok) {
          response.json().then((json) => run(null, resolve, json)).catch(() => run(null, reject, null));
        } else {
          response.json().then((json) => {
            if(json === null) {
              run(null, reject, null)
            } else {
              run(null, reject, json)
            }
          }).catch(() => run(null, reject, null))
        }
      })
    })
  },

  invalidate() {
    return Promise.resolve()
  },


  makeRequest(data, options = {}) {
    let url = options.url || this.get('serverLoginEndpoint');
    let requestOptions = {};
    let body = JSON.stringify(data);
    assign(requestOptions, {
      body,
      method:   'POST',
      headers:  {
        'accept':       JSON_CONTENT_TYPE,
        'content-type': JSON_CONTENT_TYPE
      }
    });
    assign(requestOptions, options || {});

    return fetch(url, requestOptions);
  },
})
