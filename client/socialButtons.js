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


// popup has issues with firefox marketplace
// trying out always use redirect
var getLoginStyle = function() {
  return 'redirect';

  // if (Meteor.isCordova) {
  //     return 'redirect'
  // }
  //
  // if (screen.width < 1000) {
  //     return 'redirect'
  // }
  //
  // return 'popup'
}
