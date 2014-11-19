Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});
