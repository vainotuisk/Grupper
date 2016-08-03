


Meteor.publish('liikmed', function () {
  return Liikmed.find();
});

Meteor.publish('teams', function () {
  return Teams.find();
});