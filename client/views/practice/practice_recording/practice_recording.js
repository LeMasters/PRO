Template.practiceRecording.rendered = function() {
  if(!this.rendered) {
    var audio = document.getElementById('practiceAudio');
    audio.addEventListener('timeupdate',function (){
      var timeleft = document.getElementById('timeleft'),
          duration = parseInt(audio.duration),
          currentTime = parseInt(audio.currentTime),
          timeLeft = duration - currentTime,
          s, m;
      s = timeLeft % 60;
      m = Math.floor(timeLeft/60) % 60;
      s = s < 10 ? "0" + s : s;
      m = m < 10 ? "0" + m : m;
      timeleft.innerHTML = m + ":" + s;
      this.rendered = true;
    }, false);
  }
};

Template.practiceRecording.events({
  'click #playPracticeAudio': function(){
    practiceAudio.play();
  },

  'click #pausePracticeAudio': function(){
    practiceAudio.pause();
  },

  'ended #practiceAudio': function(){
    Session.set("practiceHasEnded", true);
  },

  'click input[type=submit]': function(e, tmpl){
    e.preventDefault();
    var notes = tmpl.find("#notes").value;
    var id = Meteor.userId();
    Meteor.users.update(id, {
      $set: {
        profile: {
          notes: notes
        }
      }
    });

    Router.go('practiceQuestionsIndex');
  },

  'canplay #practiceAudio': function(){
    practiceAudio.addEventListener('timeupdate', function(){
      if(practiceAudio.currentTime >= 0 && practiceAudio.currentTime <= 1) {
        Meteor.call('deliverEmailPractice1');
      }
    }, false);

    practiceAudio.addEventListener('timeupdate', function(){
      if(practiceAudio.currentTime >= 20 && practiceAudio.currentTime <= 21) {
        Meteor.call('deliverEmailPractice2');
      }
    }, false);

    practiceAudio.addEventListener('timeupdate', function(){
      if(practiceAudio.currentTime >= 40 && practiceAudio.currentTime <= 41) {
        Meteor.call('deliverEmailPractice3');
      }
    }, false);
  }
});

Template.practiceRecording.audioHasEnded = function(){
  return Session.get("practiceHasEnded");
};
