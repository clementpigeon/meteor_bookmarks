Meteor.publish('bookmarks', function(userId){
  return Bookmarks.find({userId: userId, deleted: {$ne: true}});
});
