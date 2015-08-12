Router.configure({
  layoutTemplate: "MasterLayout",
  routeControllerNameConverter: "upperCamelCase"
});

Router.map(function() {
  this.route('instructions', {
    path: '/instructions',
  });
  
  this.route('begin', {
    path: '/',
    template: 'signupForm'
  });
  
  this.route('demographics', {
    path: '/demographics',
    template: 'demographics'
  });
  
  this.route('messages.index', {
    path: '/survey',
    template: 'MessagesIndex',
    layoutTemplate: 'SurveyLayout'
  });  
  
  this.route('messages.detail', {
    path: '/messages/:_id',
    template: 'MessagesDetail',
    layoutTemplate: 'SurveyLayout'
  });
  
  this.route('practice.index', {
    path: '/practice',
    template: 'PracticeIndex',
    layoutTemplate: 'PracticeLayout'
  });
  
  this.route('practice.detail', {
    path: '/practice/:_id',
    template: 'PracticeDetail',
    layoutTemplate: 'PracticeLayout'
  });
  
  this.route('practice.questions.index', {
    path:'/practicequestions',
    template: 'PracticeQuestionsIndex'
  });
  
  this.route('questions.index',
            {
              path: '/questions',
              template: 'QuestionsIndex'
            });
  
  this.route('practice.answers',
             {
               path: '/practiceanswers',
               template: 'PracticeAnswers'
             });
  
  this.route('link.page',
            {
              path: '/qualtricslink',
              template: 'LinkPage'
            });
  
});