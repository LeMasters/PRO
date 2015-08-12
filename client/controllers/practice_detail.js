PracticeDetailController = RouteController.extend({
  waitOn: function() {
    var id = this.params._id;
    Meteor.subscribe('practiceDetail', id);
  },

  data: function() {
    var id = this.params._id;
    var practice = Practice.findOne({_id: id});

    if(practice)
      App.track('Practice View', {subject: practice.subject});

    return practice;
  },

  action: function() {
    this.render();
  }
})
