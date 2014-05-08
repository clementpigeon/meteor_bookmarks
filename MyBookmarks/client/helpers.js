Template.main.bookmarks = function () {
  return [
    {
      url: "http://www.google.com",
      title: "Google",
      note: "where it all begins"
    },
    {
      url: "http://www.lemonde.fr",
      title: "Le Monde.fr",
      note: "Le news"
    }
  ];
};

Template.main.events({
  'click input#newBookmark': function () {
      var url = window.location.hash.slice(1);
      console.log(url);
  }
});
