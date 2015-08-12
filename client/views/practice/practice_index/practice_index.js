Template.practiceIndex.helpers({
  arrayPractice: function() {
    return Practice.find({},
          {
          	sort: {priority: 1}
          });
  }
});
