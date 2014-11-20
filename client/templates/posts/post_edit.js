Template.postEdit.events({
  'submit form' : function(e) {
    e.preventDefault();

    var currentPostId = this._id;

    var postProperties = {
      url: e.target.url.value,
      title: e.target.title.value
    }

    Posts.update(currentPostId, {$set: postProperties}, function(error) {
      if (error){
        alert(error.reason);
      } else {
        Router.go('postPage', {_id: currentPostId});
      }
    });
  },

  'click .delete': function(e) {
     e.preventDefault();

    if (confirm("Delete This Post?")) {
      Posts.remove(this._id);
      Router.go('postsList');
    }
  }
});
