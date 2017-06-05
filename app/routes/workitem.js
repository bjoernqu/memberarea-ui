import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return [
      {
        id: 3,
        created_at: '2017-05-31T10:53:50.837887Z',
        updated_at: '2017-06-05T09:36:36.380769Z',
        title: 'New Workitem',
        description:
          'Das ist ein ganz langer Beschreibungstext. Hier wird zum Beispiel erklärt wie der Rasen zu mähen ist, oder wie die Fenster zu putzen sind. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        published: false,
        duration_expected: 90,
        due_at: '2017-07-09',
        max_assignees: 3,
        created_by: {
          id: 21,
          display_name: 'Max Groß'
        },
        tags: [
          {
            id: 2,
            name: 'Tag 2'
          },
          {
            id: 4,
            name: 'Tag 4'
          },
          {
            id: 7,
            name: 'Was geht nicht'
          }
        ],
        assignments: [
          {
            id: 6,
            assignee: {
              id: 78,
              display_name: 'Theo Schulze'
            },
            duration_real: null,
            done_at: null,
            verified_at: null,
            verified_by: null,
            workitem: {
              id: 3,
              title: 'New Workitem'
            }
          },
          {
            id: 7,
            assignee: {
              id: 73,
              display_name: 'Theo Schmied'
            },
            duration_real: 90,
            done_at: '2017-07-09',
            verified_at: null,
            verified_by: {
              id: 89,
              display_name: 'Theo Wagner'
            },
            workitem: {
              id: 3,
              title: 'New Workitem'
            }
          },
          {
            id: 8,
            assignee: {
              id: 56,
              display_name: 'Max Müller'
            },
            duration_real: null,
            done_at: null,
            verified_at: null,
            verified_by: null,
            workitem: {
              id: 3,
              title: 'New Workitem'
            }
          }
        ]
      },
      {
        id: 4,
        created_at: '2017-06-05T08:49:07.185073Z',
        updated_at: '2017-06-05T08:49:07.185137Z',
        title: 'New Workitem 33',
        description: 'The description 33',
        published: false,
        duration_expected: 60,
        due_at: '2017-07-09',
        max_assignees: 3,
        created_by: {
          id: 78,
          display_name: 'Theo Schulze'
        },
        tags: [],
        assignments: []
      },
      {
        id: 1,
        created_at: '2017-05-29T08:47:27.331206Z',
        updated_at: '2017-05-29T08:47:27.331268Z',
        title: 'WI 1',
        description: 'WI 1 desc',
        published: false,
        duration_expected: 60,
        due_at: '2017-05-29',
        max_assignees: 3,
        created_by: {
          id: 45,
          display_name: 'Max Mann'
        },
        tags: [
          {
            id: 1,
            name: 'Tag 1'
          },
          {
            id: 2,
            name: 'Tag 2'
          },
          {
            id: 3,
            name: 'Tag 3'
          },
          {
            id: 4,
            name: 'Tag 4'
          },
          {
            id: 5,
            name: 'Tag 5'
          },

          {
            id: 6,
            name: 'Tag 6'
          },
          {
            id: 7,
            name: 'Tag 7'
          },
          {
            id: 8,
            name: 'Tag 8'
          },
          {
            id: 9,
            name: 'Tag 9'
          },
          {
            id: 10,
            name: 'Tag 10'
          }
        ],
        assignments: []
      },
      {
        id: 2,
        created_at: '2017-05-29T08:47:40.074121Z',
        updated_at: '2017-06-05T08:48:38.487794Z',
        title: 'WI 2 neu neu',
        description: 'WI 2 desc',
        published: true,
        duration_expected: 900,
        due_at: '2017-05-29',
        max_assignees: 3,
        created_by: {
          id: 45,
          display_name: 'Max Mann'
        },
        tags: [
          {
            id: 1,
            name: 'Tag 1'
          },
          {
            id: 5,
            name: 'Tag 5'
          }
        ],
        assignments: [
          {
            id: 3,
            assignee: {
              id: 20,
              display_name: 'Max Fuchs'
            },
            duration_real: null,
            done_at: null,
            verified_at: null,
            verified_by: null,
            workitem: {
              id: 2,
              title: 'WI 2 neu neu'
            }
          },
          {
            id: 4,
            assignee: {
              id: 21,
              display_name: 'Max Groß'
            },
            duration_real: null,
            done_at: null,
            verified_at: '2017-05-29T17:59:43.556354Z',
            verified_by: null,
            workitem: {
              id: 2,
              title: 'WI 2 neu neu'
            }
          },
          {
            id: 5,
            assignee: {
              id: 27,
              display_name: 'Max Heumann'
            },
            duration_real: 90,
            done_at: '2017-05-29',
            verified_at: '2017-05-29T19:37:01Z',
            verified_by: {
              id: 89,
              display_name: 'Theo Wagner'
            },
            workitem: {
              id: 2,
              title: 'WI 2 neu neu'
            }
          }
        ]
      }
    ];
  }
});
