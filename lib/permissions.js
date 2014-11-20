// check to see if the current user owns this doc
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}