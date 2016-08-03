/*****************************************************************************/
/* EditLiige: Event Handlers */
/*****************************************************************************/
Template.EditLiige.events({

});

/*****************************************************************************/
/* EditLiige: Helpers */
/*****************************************************************************/
Template.EditLiige.helpers({
    beforeRemove: function () {
        return function (collection, id) {
            var doc = collection.findOne(id);
            console.log('modali info:',doc);
            if (confirm('Oled kindel et tahad kustutada liikme "' + doc.enimi + " " + doc.pnimi + '"?')) {
                this.remove();
                Router.go('liikmedList');
            }
        };
    }
});

/*****************************************************************************/
/* EditLiige: Lifecycle Hooks */
/*****************************************************************************/
Template.EditLiige.onCreated(function () {
});

Template.EditLiige.onRendered(function () {
});

Template.EditLiige.onDestroyed(function () {
});
