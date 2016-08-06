/*****************************************************************************/
/* ListTeams: Event Handlers */
/*****************************************************************************/
Template.ListTeams.events({
    'click #delete': function(e) {
        e.preventDefault();

        Meteor.call('deleteTeam', this, function(error, result) {
            if (error) {
                alert(error);
            }
        });
    },
    'click #edit': function(e) {
        e.preventDefault();

   //     Modal.show('teamEditModal');
        team = $(e.target).closest('.team')
        teamId = team.attr('data-id')
        ModalHelper.openModalFor(teamId);
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