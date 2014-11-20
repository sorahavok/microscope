Template.postSubmit.events({
  'submit form' : function(e) {
    e.preventDefault();
    
    var post = {
      url: e.target.url.value,
      title: e.target.title.value
    };
    
    Meteor.call('postInsert', post, function(error, result){
      if (error) {
        return alert(error.reason);
      }

      if (result.postExists) {
        alert('This link has already been posted');
      }

      
    });
    Router.go('postsList');
  }
});
