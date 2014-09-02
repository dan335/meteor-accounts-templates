Template.aSignin.events({
	'click #s-submitButton': function(event, template) {
		event.preventDefault()

		var username = template.find('#s-username')
		var pass = template.find('#s-password')
		var successAlert = template.find('#s-successAlert')
		var errorAlert = template.find('#s-errorAlert')
		var button = event.currentTarget

		$(errorAlert).hide()
		$(successAlert).hide()

		if ($(username).val().length == 0 || $(pass).val().length == 0) {
			return false
		}

		var buttonText = $(button).html
		$(button).html('Please Wait')
		$(button).attr("disabled", "disabled");
		Meteor.loginWithPassword($(username).val(), $(pass).val(), function(error) {
			if (error) {
				$(errorAlert).show()
				$(errorAlert).html(error.reason)
				$(button).removeAttr('disabled')
				$(button).html = buttonText
			} else {

			}
		})

	}
})