Router.configure({
  layoutTemplate: "appLayout",
  routeControllerNameConverter: "upperCamelCase"
});

Router.route('/sorry', function() {
    this.render('sorry');
}, {
    name: 'sorry'
});


Router.route('/', function() {
  this.render('accounts');
}, {
  name: 'signupForm'
});


Router.route('instructions', function() {
  this.render('instructions');
}, {
  name: 'instructions'
});


Router.route('/demographics', function() {
  this.render('demographics');
}, {
  name: 'demographics'
});

Router.route('/practice/practice_answers', function() {
	this.render('practiceAnswers');
}, {
	name: 'practiceAnswers'
});

/* removed in order to change to :_id
Router.route('/practice/practice_detail', function() {
	this.render('practiceDetail');
}, {
	name: 'practiceDetail'
});
*/
Router.route('/practice/practice_detail/:_id', function() {
	this.render('practiceDetail');
}, {
	name: 'practiceDetail',
	layoutTemplate: 'practice_layout'
});

Router.route('/practice/practice_index', function() {
	this.render('practiceIndex');
}, {
	name: 'practiceIndex',
	layoutTemplate: 'practice_layout'
});
/* removed to parallel previous author's version
Router.route('/practice/practice_item', function() {
	this.render('practiceItem');
}, {
	name: 'practiceItem'
});
*/
Router.route('/practice/practice_questions_index', function() {
	this.render('practiceQuestionsIndex');
}, {
	name: 'practiceQuestionsIndex'
});


Router.route('/practice/practice_recording', function() {
	this.render('practiceRecording');
}, {
	name: 'practiceRecording'
});


Router.route('/survey/messages_index', function() {
	this.render('messagesIndex');
}, {
	name: 'messagesIndex',
	layoutTemplate: 'master_layout'
});

Router.route('/survey/messages_count', function() {
	this.render('messagesCount');
}, {
	name: 'messagesCount'
});

Router.route('/survey/messages_detail', function() {
	this.render('messagesDetail');
}, {
	name: 'messagesDetail',
	layoutTemplate: 'master_layout'
});

Router.route('/survey/messages_item', function() {
	this.render('messagesItem');
}, {
	name: 'messagesItem'
});

Router.route('/link_page', function() {
	this.render('linkPage');
}, {
	name: 'linkPage'
});

Router.route('/home', function() {
	this.render('home');
}, {
	name: 'home'
});

Router.route('/dashboard', function() {
	this.render('dashboard');
}, {
	name: 'dashboard',
	controller: 'DashboardController'
});

Router.route('/notifications', function() {
    this.render('notifications');
}, {
    name: 'notifications'
});
