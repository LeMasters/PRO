Template.MessagesDetail.events({
  'click #backbutton': function() {
    Router.go('messages.index');
    var d = new Date();
    var n = d.getTime();
    App.track('Back to Inbox', {currentTime: n});
  }
});