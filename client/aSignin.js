Template.aSignin.events({
	'click #s-submitButton': function(event, template) {
		event.preventDefault()

		var username = template.find('#s-username')
		var pass = template.find('#s-password')
		var successAlert = template.find('#s-successAlert')
		var errorAlert = template.find('#s-errorAlert')
		var button = template.find('#s-submitButton')

		$(errorAlert).hide()
		$(successAlert).hide()

		var error = false
		var errMsg = ''

		var valUsername = validateUsername($(username).val())
		if ( valUsername !== true ) {
			error = true
			errMsg = valUsername
		}

		var valPass = validatePassword($(pass).val())
		if ( valPass !== true ) {
			error = true
			errMsg = valPass
		}

		if (error) {
			$(errorAlert).show()
			$(errorAlert).html(errMsg)
		} else {

			var buttonText = $(button).html()
			$(button).html('Please Wait')
			$(button).attr("disabled", "disabled");
			Meteor.loginWithPassword($(username).val(), $(pass).val(), function(error) {
				if (error) {
					$(errorAlert).show()
					$(errorAlert).html(error.reason)
					$(button).removeAttr('disabled')
					$(button).html(buttonText)
				}
			})
		}

	}
})