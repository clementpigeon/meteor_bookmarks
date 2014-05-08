Bookmarks = new Meteor.Collection('bookmarks');

Meteor.publish('bookmarks', function(userId){
  return Bookmarks.find({userId: userId});
});
