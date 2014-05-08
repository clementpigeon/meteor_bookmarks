Template.bookmarkList.bookmarks = function () {
  return Bookmarks.find({}, {sort: {'created': -1}});
};

Template.bookmarkList.justDeleted = function () {
  return !!Session.get('justDeletedId');
};
