if (Bookmarks.find({}).count() === 0) {
  var now = new Date().getTime();

  var clemId = Meteor.users.insert({
    profile: { name: "Clément Pigeon" }
  });

  var clem = Meteor.users.findOne(clemId);

  Bookmarks.insert({
    userId: clemId,
    created: now - 2 * 3600 * 1000,
    title: 'Google',
    url: 'http://www.google.com',
    note: "where it all begins"
  });

  Bookmarks.insert({
    userId: clemId,
    created: now - 1 * 3600 * 1000,
    title: 'Le Monde',
    url: 'http://www.lemonde.fr',
    note: "Le news"
  });

}
