Template.postSubmit.events({
  'submit form' : function(e) {
    e.preventDefault();
    
    var post = {
      url: e.target.url.value,
      title: e.target.title.value
    };
    
    post._id = Posts.insert(post);
    Router.go('postPage', post);
  }
});