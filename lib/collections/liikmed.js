Liikmed = new Mongo.Collection('liikmed');


if (Meteor.isServer) {
  Liikmed.allow({
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

Liikmed.attachSchema(new SimpleSchema({
  enimi: {
    type: String,
    label: "Eesnimi",
    max: 100
  },
  pnimi: {
    type: String,
    label: "Perenimi",
    max: 100
  },

    sugu: {
    type: String,
    label: "Sugu",
    allowedValues: ['mees', 'naine'],
      autoform: {
        options: [
          {label: "mees", value: "mees"},
          {label: "naine", value: "naine"}
        ]
      }
  },
  team: {
    type: String,
    label :"võistkond",
    max: 100,
    optional: true
  }

}));



Liikmed.helpers({
  pikknimi() {
    return `${this.enimi} ${this.pnimi}`;
  },
  teams() {
    return Teams.find({ liigeId: this._id });
  }
});

