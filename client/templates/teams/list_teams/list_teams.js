/*****************************************************************************/
/* ListTeams: Event Handlers */
/*****************************************************************************/
Template.ListTeams.events({
    'click #delete': function(e) {
        e.preventDefault();

        /*Meteor.call('deleteTeam', this, function(error, result) {
            if (error) {
                alert(error);
            }
        });*/
        var seier = this
        BootstrapModalPrompt.prompt({
            title: "Oled kindel?",
            content: "Kas kustutada võistkond?",
            btnDismissText: "loobu",
        }, function(result) {
            if (result) {
                Meteor.call('deleteTeam', seier, function(error, result) {
                    if (error) {
                        alert(error);
                    }
                });
            }
            else {
                // User did not confirm, do nothing.

            }
        });
    },
    'click #edit': function(e) {
        e.preventDefault();

   //     Modal.show('teamEditModal');
        team = $(e.target).closest('.team')
        teamId = team.attr('data-id')
        ModalHelper.openModalFor(teamId);
    },
    "click table tbody tr": function(e, t){
        // Select or deselect and item by clicking on the table row
        //    if(!Session.get("selectedItemId")){

        Session.set("selectedItemId", this._id);
        //  } else {
        //      Session.set("selectedItemId", null);
        //  }
    }
});

/*****************************************************************************/
/* ListTeams: Helpers */
/*****************************************************************************/
Template.ListTeams.helpers({
    teams: function() {
        return Teams.find();
    }
});


/*****************************************************************************/
/* ListTeams: Lifecycle Hooks */
/*****************************************************************************/
Template.ListTeams.onCreated(function () {
});

Template.ListTeams.onRendered(function () {
});

Template.ListTeams.onDestroyed(function () {
});
/*****************************************************************************/
/* Modal events
/*****************************************************************************/

Template.teamEditModal.events({
    'click #save': function(e) {
        e.preventDefault();

       /* var team = {
            nimi: $('#teamName').val()
        }

        Meteor.call('addTeam', team, function(error, result) {
            if (error) {
                alert(error);
            }
        });*/
        var teamId = Session.get('selectedTeamId');
        var team = {
            nimi: $('#teamName').val(),
            kirjeldus: $('#teamKirjeldus').val()
        }

        if (!teamId) {
            Meteor.call('addTeam', team, function(error, result) {
                if (error) {
                    alert(error);
                }
            });
        } else {
            _.extend(team, {id: teamId});
            Meteor.call('editTeam', team, function(error, result) {
                if (error) {
                    alert(error);
                }
            });
        }

        Modal.hide('teamEditModal');
    }
});

/*****************************************************************************/
/* Modal helpers
/*****************************************************************************/
Template.teamEditModal.helpers({
    team: function() {
        var teamId = Session.get('selectedTeamId');

        if (typeof teamId !== "undefined") {
            var team = Teams.findOne(teamId);
            return team;
        } else {
            return {nimi:''}
        }
    }
});


ModalHelper = {};

ModalHelper.openModalFor = function(teamId) {
   // console.log('tiimi:', teamId);
    Session.set('selectedTeamId', teamId);

    Modal.show('teamEditModal');
}

Template.teamInfoModal.helpers({
    selectedItem: function(){
        console.log("sessioon:", Teams.findOne({_id: Session.get("selectedItemId")}));
        return Teams.findOne({_id: Session.get("selectedItemId")});
    }
});

Template.teamInfoModal.helpers({

});