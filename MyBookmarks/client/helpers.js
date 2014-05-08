Meteor.subscribe('bookmarks', Meteor.userId());

Template.main.rendered = function(){
  Session.set('newBookmarkId', null);
}

Template.main.newBookmark = function () {
  var newBookmarkId = Session.get('newBookmarkId');
  return newBookmarkId && Bookmarks.findOne(newBookmarkId);
};

Template.main.events({
  'click input#newBookmark': function () {
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

Template.bookmarkList.bookmarks = function () {
  return Bookmarks.find({}, {sort: {'created': -1}});
};

Template.addNote.events({
  'click input#dismiss': function (e) {
    e.preventDefault();
    Session.set('newBookmarkId', null);
  },

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
