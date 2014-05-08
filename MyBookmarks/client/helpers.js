Template.main.bookmarks = function () {
  return Bookmarks.find({});
};

Template.main.events({
  'click input#newBookmark': function () {
      var url = window.location.hash.slice(1);
      console.log(url);
  }
});
