/*****************************************************************************/
/*  Client and Server Methods */
/*****************************************************************************/

Meteor.methods({
  'lib/method_name': function () {
    
    if (this.isSimulation) {
    //   // do some client stuff while waiting for
    //   // result from server.
    //   return;
    }
    // server method logic
  },
  deleteLiige: function (liige) {
    Liikmed.remove(liige);
  },
  editLiige: function(liige) {
    Liikmed.update(liige.id, {$set: {
      enimi: liige.enimi,pnimi:liige.pnimi,sugu:liige.sugu
    }});
  },
  addLiige: function(liige) {
    check(liige.pnimi, String);
    Liikmed.insert(liige);
  },
  deleteTeam: function (liige) {
    Teams.remove(liige);
  },
  editTeam: function(team) {
    Teams.update(team.id, {$set: {
      nimi: team.nimi,
      kirjeldus: team.kirjeldus
    }});
  },
  addTeam: function(team) {
    check(team.nimi, String);
    Teams.insert(team);
  },

});

