/*****************************************************************************/
/* CreateTeam: Event Handlers */
/*****************************************************************************/
Template.createTeamsModal.events({
    'click #lisabutton': function(e) {
        console.log('vajutasid küll');
    //    e.preventDefault();
        Modal.hide('createTeamsModal');
    }
});

/*****************************************************************************/
/* CreateTeam: Helpers */
/*****************************************************************************/
Template.CreateTeam.helpers({
});

/*****************************************************************************/
/* CreateTeam: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateTeam.onCreated(function () {
});

Template.CreateTeam.onRendered(function () {
});

Template.CreateTeam.onDestroyed(function () {
});
