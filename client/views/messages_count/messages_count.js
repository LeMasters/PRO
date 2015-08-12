Template.MessagesCount.helpers({
  totalCount: function() {
    return Messages.find().count();
  }
});