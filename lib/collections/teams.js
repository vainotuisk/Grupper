Teams = new Mongo.Collection('teams');


if (Meteor.isServer) {
  Teams.allow({
    insert: function (userId, doc) {
      console.log('dokkon:  ',doc);
      console.log('juuserid:  ',userId);
      if(Meteor.user()) {
        if(userId != doc.createdBy){
          return false;
        }
      }
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      if(Meteor.user()) {
        if(userId != doc.createdBy){
          return false;
        }
      }
      return true;
    },

    remove: function (userId, doc) {
      console.log('kustutamisel on userID:', userId);
      console.log('kustutamisel on createdBy:', doc.createdBy);
      if (Meteor.user()) {
        if (userId == doc.createdBy) {
          return true;
        }
      }
      else {
        return false;
      }

    }
  });


}
Teams.attachSchema(new SimpleSchema({
  nimi: {
    type: String,
    label: "Nimi",
    max: 100
  },
  liikmed: {
    label: "liikmed",
    type: [ String ],
    optional: true
  },
  kirjeldus: {
    type: String,
    label: "kirjeldus",
    optional: true
  },
/*  createdOn: {
    type: Date,
    label: "Last date this book was checked out",
    optional: true
  },*/

createdBy: {
  type: String,
  label: "teamiLisajaId",
  autoValue:function(){ return this.userId },
  optional: true
  }
}));

