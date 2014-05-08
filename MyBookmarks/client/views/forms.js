Template.addBookmarkButton.events({
  'click #newBookmark': function () {
    var fragment = window.location.hash.slice(1);
    var url = decodeURIComponent(fragment.split('&')[0]);
    var title = decodeURIComponent(fragment.split('&')[1]);

    var newBookmarkId = Bookmarks.insert({
      userId: Meteor.userId(),
      created: new Date().getTime(),
      title: title,
      url: url
    });

    Session.set('newBookmarkId', newBookmarkId);
  }
});

Template.afterBookmarkAdded.events({
  'click #dismiss': function (e) {
    e.preventDefault();
    Session.set('newBookmarkId', null);
  }
});

Template.editBookmark.events({
  'submit form': function (e) {
    e.preventDefault();
    var title = $(e.target).find('[name=title]').val();
    var note = $(e.target).find('[name=note]').val();

    Bookmarks.update(
      {"_id": Session.get('newBookmarkId')},
      {
        $set : {
          "title": title,
          "note": note
        }
      }
    )
    Session.set('newBookmarkId', null);
  }
});

Template.undoDeleteForm.events({
  'click .close': function (e) {
    e.preventDefault();
    Session.set('justDeletedId', null);
  },
  'click #undo-delete': function (e) {
    e.preventDefault();

    Bookmarks.update(
      {"_id": Session.get('justDeletedId')},
      {
        $set : {
          "deleted": false
        }
      }
    )
    Session.set('justDeletedId', null);
  }
});

