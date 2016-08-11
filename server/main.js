import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});
if (Teams.find().count() === 0) {
    Teams.insert({
        nimi: "Essa",
        liikmed: ["esimene"]

    });
    Teams.insert({
        nimi: "Tessa",
        kirjeldus: "tessa kirjeldus",
        liikmed: ["esimene","teine","kolmaa"]

    });
    Teams.insert({
        nimi: "Kossa",
        kirjeldus: "Kossa on hea team",
        liikmed: ["esimene","teine"]
    });
}

if (Liikmed.find().count() === 0) {
    Liikmed.insert({
        enimi: "Peep",
        pnimi: "Cat",
        sugu: "mees"
    });
    Liikmed.insert({
        enimi: "Siim",
        pnimi: "Kinnas",
        sugu: "mees",
        team: "tessa"
    });
    Liikmed.insert({
        enimi: "Enn",
        pnimi: "Kask",
        sugu: "mees"
    });
    Liikmed.insert({
        enimi: "Vaike",
        pnimi: "Vaher",
        sugu: "naine",
        team: "essa"
    });
}