import Ember from 'ember';
import fetch from 'fetch';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const JSON_CONTENT_TYPE = 'application/json';
const { RSVP: { Promise }, run, assign: emberAssign, merge } = Ember;
const assign = emberAssign || merge;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    var session = this.get('session')
    var user = session.get('data.authenticated.user')

    let url = '/api/user/'
    let requestOptions = {};
    assign(requestOptions, {
      method:   'GET',
      headers:  {
        'accept':       JSON_CONTENT_TYPE,
        'content-type': JSON_CONTENT_TYPE,
        'Authorization': `Token ${user.token}`,
      }
    });

    return new Promise((resolve, reject) => {
      fetch(url, requestOptions).then((response) => {
        if(response.ok) {
          response.json().then((json) => run(null, resolve, json))
        } else {
          run(null, reject, response)
        }
      })
    })
  },

  actions: {
    error: function(reasons, transition) {
      if(reasons.status === 403) {
        this.get('session').invalidate()
        this.transitionTo('login')
      } else {
        return true
      }
    }
  }
});
