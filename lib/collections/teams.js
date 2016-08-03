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
    type: String,
    label: "liikmed",
    type: [ String ],
    optional: true
  }

}));

