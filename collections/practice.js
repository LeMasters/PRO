console.log("Creating Practice.");

Practice = new Meteor.Collection('practice');

console.log("Practice created.");
var count = Practice.find({author: "Bob", owner: this.userId}).count();
console.log("BOB:  ", count);
// NB I've removed owner: this.userId, cause twern't working
/*
Practice.insert(
    { author: "Bob", subject: "RE: Meeting next week regarding sales conference", time: "10:20", details: "I am swamped but could meet on Tuesday or Wednesday.", priority: 3, has_read: false
    },
    { author: "Jane", subject: "RE: Meeting next week regarding sales conference", time: "12:30", details: "I am going to be on vacation Monday and Tuesday next week, and will need Wednesday to catch up, so I could not meet until Thursday or Friday.", priority: 2, has_read: false
},
    { author: "Jane", subject: "RE: Meeting next week regarding sales conference", time: "12:30", details: "I am going to be on vacation Monday and Tuesday next week, and will need Wednesday to catch up, so I could not meet until Thursday or Friday.", priority: 2, has_read: false
});

console.log("allowing...");

Practice.allow({
  update: function(userId, doc, fields, modifier) {
    return doc.owner === userId;
  }
});

console.log("allowed.");
*/
