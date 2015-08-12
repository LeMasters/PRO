Template.practiceItem.events({
  'click .list-group-item': function (event,tmpl) {
    event.preventDefault();
    Practice.update({_id: this._id}, {
      $set: {"has_read": true},
    });
  }
});

Template.practiceItem.helpers({
  hasReadClass: function() {
    return this.has_read? 'read': '';
  },

  hasBeenReadIcon: function() {
    if(this.has_read) {
      return "glyphicon glyphicon-check";
    } else {
      return "glyphicon glyphicon-unchecked";
    }
  }
});
