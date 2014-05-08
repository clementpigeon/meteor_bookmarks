if (Bookmarks.find({}).count() === 0) {
  var now = new Date().getTime();

  var clemId = Accounts.createUser({
    'username'  : 'Clément',
    'email'     : 'clement@clem.fr',
    'password'  : 'clement' //encrypted automatically
  });

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

  var jackId = Meteor.users.insert({
    profile: { name: "Jack White" }
  });

  var jack = Meteor.users.findOne(jackId);

  Bookmarks.insert({
    userId: jackId,
    created: now - 3 * 3600 * 1000,
    title: 'Third Man Records',
    url: 'http://thirdmanrecords.com/',
    note: "Your turntable's not dead"
  });

}
