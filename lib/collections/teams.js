Teams = new Mongo.Collection('teams');


if (Meteor.isServer) {
  Teams.allow({
    insert: function (userId, doc) {
      console.log('dokkon:  ',doc);
      console.log('juuserid:  ',userId);
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
     // return doc.owner === userId;
    },

    remove: function (userId, doc) {
       return true;
     // return doc.owner === userId;
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
  label: "TegijaId",
  autoValue:function(){ return this.userId }
  },
}));

