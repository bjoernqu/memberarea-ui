import Ember from 'ember';

export default Ember.Component.extend({

    expanded: false,

    wi: {
      "id": 3,
      "created_at": "2017-05-31T10:53:50.837887Z",
      "updated_at": "2017-06-05T09:36:36.380769Z",
      "title": "New Workitem",
      "description": "Das ist ein ganz langer Beschreibungstext. Hier wird zum Beispiel erklärt wie der Rasen zu mähen ist, oder wie die Fenster zu putzen sind. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      "published": false,
      "duration_expected": 60,
      "due_at": "2017-07-09",
      "max_assignees": 3,
      "created_by": {
        "id": 21,
        "display_name": "Max Groß"
      },
      "tags": [
        {
          "id": 2,
          "name": "Tag 2"
        },
        {
          "id": 4,
          "name": "Tag 4"
        },
        {
          "id": 7,
          "name": "Was geht nicht"
        }
      ],
      "assignments": [
        {
          "id": 6,
          "assignee": {
            "id": 78,
            "display_name": "Theo Schulze"
          },
          "duration_real": null,
          "done_at": null,
          "verified_at": null,
          "verified_by": null,
          "workitem": {
            "id": 3,
            "title": "New Workitem"
          }
        },
        {
          "id": 8,
          "assignee": {
            "id": 56,
            "display_name": "Max Müller"
          },
          "duration_real": null,
          "done_at": null,
          "verified_at": null,
          "verified_by": null,
          "workitem": {
            "id": 3,
            "title": "New Workitem"
          }
        }
      ]
    },

    actions: {
      toggleExpanded() {
        this.set('expanded', !this.get('expanded'))
      }
    }

});
