Teams = new Mongo.Collection('teams');


if (Meteor.isServer) {
  Teams.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
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
  }

}));

