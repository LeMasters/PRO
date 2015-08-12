Template.MessagesIndex.helpers({
  messages: function() {
    return Messages.find({},
                        {
                          sort: {priority: -1}
                        });
  }
});
