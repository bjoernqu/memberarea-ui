export default function() {
//  this.namespace = '/api';
  this.namespace = '';
  this.post('/auth', function() {
    return {
      "user" : {
        "username": "Test",
        "userid"  : "123"
      },
      "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiZXhwIjoxNTEwNzcyMDMzfQ.k1Ve8Qflax021xAbmWbsaOJSgv9BcSKY77T5GvfEZKwaxQHUKml35ZjBCHblElGuoYZH57ZpX3KGMF39YH-adg"
    };
  });
  
  this.get('/workitems', function() {
    return [{
        "createdAt": [
            2017,
            11,
            5,
            20,
            23,
            24
        ],
        "updatedAt": [
            2017,
            11,
            5,
            20,
            23,
            24
        ],
        "id": 1,
        "title": "Test",
        "tags": []
    }];
  });
}


// export default function() {
//
// // These comments are here to help you get started. Feel free to delete them.
//
// /*
// Config (with defaults).
//
// Note: these only affect routes defined *after* them!
// */
//
// // this.urlPrefix = ''; // make this `http://localhost:8080`, for example, if
// your API is on a different server
// // this.namespace = ''; // make this `/api`, for example, if your API is
// namespaced
// // this.timing = 400; // delay for each request, automatically set to 0
// during testing
//
// /*
// Shorthand cheatsheet:
//
// this.get('/posts');
// this.post('/posts');
// this.get('/posts/:id');
// this.put('/posts/:id'); // or this.patch
// this.del('/posts/:id');
//
// http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
// */
// }
