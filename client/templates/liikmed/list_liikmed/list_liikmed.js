/*****************************************************************************/
/* ListLiikmed: Event Handlers */
/*****************************************************************************/
Template.ListLiikmed.events({
    'click #edit': function(e) {
        e.preventDefault();

        liige = $(e.target).closest('.liige')
        liigeId = liige.attr('data-id')
   //     ModalHelper.openModalFor(liigeId);
        Modal.show('EditLiige', function () {
            return Liikmed.findOne(liigeId);

        });
    },
    'click #delete': function(e) {
        e.preventDefault();

       /* Meteor.call('deleteLiige', this, function(error, result) {
            if (error) {
                alert(error);
            }
        });*/
        var seier = this
        BootstrapModalPrompt.prompt({
            title: "Oled kindel?",
            content: "Kas kustutada liige?",
            btnDismissText: "loobu",
        }, function(result) {
            if (result) {
                Meteor.call('deleteLiige', seier, function(error, result) {
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
/* ListLiikmed: Helpers */
/*****************************************************************************/
Template.ListLiikmed.helpers({

    liikmed: function() {
        return Liikmed.find();
    },
    beforeRemove: function () {
        return function (collection, id) {
            var doc = collection.findOne(id);
            if (confirm('Oled kindel et tahad kustutada liikme "' + doc.enimi + " " + doc.pnimi + '"?')) {
                this.remove();
                Router.go('liikmedList');
            }
        };
    }

});

/*****************************************************************************/
/* ListLiikmed: Lifecycle Hooks */
/*****************************************************************************/
Template.ListLiikmed.onCreated(function () {
});

Template.ListLiikmed.onRendered(function () {
});

Template.ListLiikmed.onDestroyed(function () {
});

ModalHelper = {};

ModalHelper.openModalFor = function(liigeId) {
    // console.log('tiimi:', teamId);
    Session.set('selectedLiigeId', liigeId);

    Modal.show('EditLiige');
}

Template.editItemModal.helpers({
    selectedItem: function(){
        console.log("sessioon:", Liikmed.findOne({_id: Session.get("selectedItemId")}));
        return Liikmed.findOne({_id: Session.get("selectedItemId")});
    },
    selectStatus: function(optionText){

        if(optionText === this.sugu){
            return 'selected'
        }
    }
});

Template.editItemModal.events({
    'click #save': function(e) {
        e.preventDefault();


        var liigeId = Session.get('selectedItemId');
        var liige = {
            enimi: $('#eNimi').val(),
            pnimi: $('#pNimi').val(),
            sugu: $('#sugu').val()
        }

        if (!liigeId) {
            Meteor.call('editLiige', liige, function(error, result) {
                if (error) {
                    alert(error);
                }
            });
        } else {
            _.extend(liige, {id: liigeId});
            Meteor.call('editLiige', liige, function(error, result) {
                if (error) {
                    alert(error);
                }
            });
        }

        Modal.hide('edit-item-modal');
        $('#edit-item-modal').modal('hide');
        console.log('jõudsin modali petimise reani');
    }
});