Meteor.subscribe('bookmarks', Meteor.userId());

Template.main.rendered = function(){
  Session.set('newBookmarkId', null);
  Session.set('justDeletedId', null);
  Session.set('editedBookmarkId', null);
}

Template.main.newBookmark = function () {
  var newBookmarkId = Session.get('newBookmarkId');
  return newBookmarkId && Bookmarks.findOne(newBookmarkId);
};

Template.main.editedBookmark = function () {
  var editedBookmarkId = Session.get('editedBookmarkId');
  return editedBookmarkId && Bookmarks.findOne(editedBookmarkId);
};
