Meteor.subscribe('bookmarks', Meteor.userId());

Template.main.bookmarks = function () {
  return Bookmarks.find({});
};

Template.main.events({
  'click input#newBookmark': function () {
    var fragment = window.location.hash.slice(1);
    var url = decodeURIComponent(fragment.split('&')[0]);
    var title = decodeURIComponent(fragment.split('&')[1]);

    Bookmarks.insert({
      userId: Meteor.userId(),
      created: new Date().getTime(),
      title: title,
      url: url
    });
  }
});
