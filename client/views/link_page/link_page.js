Template.LinkPage.helpers({
  surveyNotes: function() {
    return Meteor.user().profile.surveynotes;
  }
});