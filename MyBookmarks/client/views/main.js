Meteor.subscribe('bookmarks', Meteor.userId());

Template.main.rendered = function(){
  Session.set('newBookmarkId', null);
  Session.get('justDeletedId', null);
}

Template.main.newBookmark = function () {
  var newBookmarkId = Session.get('newBookmarkId');
  return newBookmarkId && Bookmarks.findOne(newBookmarkId);
};
