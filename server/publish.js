


Meteor.publish('liikmed', function () {
  return Liikmed.find({createdBy: this.userId});
});

Meteor.publish('teams', function () {
 // return Teams.find();
  return Teams.find({createdBy: this.userId})
});