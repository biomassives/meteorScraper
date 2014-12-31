if (Meteor.isClient) {

var cheerio = __meteor_bootstrap__.require('cheerio');
Meteor.methods({
last_action: function() {
       $ = cheerio.load(Meteor.http.get("https://github.com/meteor/meteor").content);
       return $('.commit-title').text().trim()      
    }
})



  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
