Template.bookmarkItem.events({
  'click a#remove': function (e) {
    e.preventDefault();

    Bookmarks.update(
      {"_id": this._id},
      {
        $set: {
          "deleted": true
        }
      }
    );

    Session.set('justDeletedId', this._id);
  },

  'click a#edit': function (e) {
    e.preventDefault();

    Session.set('editedBookmarkId', this._id);
  }
})
