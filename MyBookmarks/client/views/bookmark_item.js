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
  }
})
