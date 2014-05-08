Bookmarks = new Meteor.Collection('bookmarks');

ownsBookmark = function(userId, bookmark){
  return bookmark && bookmark.userId === userId;
}

Bookmarks.allow({
  insert: ownsBookmark,
  update: ownsBookmark,
  remove: ownsBookmark
});
