Meteor.publish('messagesIndex', function() {
  return Messages.find({owner: this.userId});
});

Meteor.publish('messagesDetail', function(id) {
  return Messages.find({_id: id});
});

Meteor.publish('practiceIndex', function() {
  return Practice.find({owner: this.userId});
});

Meteor.publish('practiceDetail', function(id) {
  return Practice.find({_id:id});
})

Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'other': 1, 'things': 1}});
  } else {
    this.ready();
  }
});
