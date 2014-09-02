Template.aCreateAccount.events({
	'click #ca-submitButton': function(event, template) {
		event.preventDefault()

		var username = template.find('#ca-username')
		var email = template.find('#ca-email')
		var pass = template.find('#ca-password')
		var successAlert = template.find('#ca-successAlert')
		var errorAlert = template.find('#ca-errorAlert')
		var button = template.find('#ca-submitButton')

		var error = false
		var errMsg = ''
		$(errorAlert).hide()
		$(successAlert).hide()

		var valUsername = validateUsername($(username).val())
		if ( valUsername !== true ) {
			error = true
			errMsg = valUsername
		}

		var valEmail = validateEmail($(email).val())
		if ( valEmail !== true ) {
			error = true
			errMsg = valEmail
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
			
			Accounts.createUser({
				username:$(username).val(),
				email:$(email).val(),
				password:$(pass).val()
			}, function(error) {
				if (error) {
					$(errorAlert).show()
					$(errorAlert).html(error.reason)
					$(button).removeAttr('disabled')
					$(button).html(buttonText)
				} else {

				}
			})
		}

	}
})