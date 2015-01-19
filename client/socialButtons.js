Template.aGoogleButton.helpers({
    isActive: function() {
        if (!Accounts.loginServicesConfigured()) {
            return {disabled:'disabled'}
        }
    }
})

Template.aFacebookButton.helpers({
    isActive: function() {
        if (!Accounts.loginServicesConfigured()) {
            return {disabled:'disabled'}
        }
    }
})

Template.aGoogleButton.events({
    'click button': function() {
        Meteor.loginWithGoogle({loginStyle: getLoginStyle()}, function(error) {
            if (error) {
                $('#socialErrorAlert').html(error.reason)
                $('#socialErrorAlert').show()
            }
        })
    }
})

Template.aFacebookButton.events({
    'click button': function() {
        Meteor.loginWithFacebook({loginStyle: getLoginStyle()}, function(error) {
            if (error) {
                $('#socialErrorAlert').html(error.reason)
                $('#socialErrorAlert').show()
            }
        })
    }
})


var getLoginStyle = function() {
    if (Meteor.isCordova) {
        return 'redirect'
    }

    if (screen.width < 700) {
        return 'redirect'
    }

    return 'popup'
}
