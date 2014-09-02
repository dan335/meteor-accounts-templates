Template.aForgotPassword.events({
	'click #fp-submitButton': function(event, template) {
		event.preventDefault()

		var email = template.find('#fp-email')
		var successAlert = template.find('#fp-successAlert')
		var errorAlert = template.find('#fp-errorAlert')
		var button = template.find('#fp-submitButton')

		$(errorAlert).hide()
		$(successAlert).hide()

		var error = false
		var errMsg = ''

		var valEmail = validateEmail($(email).val())
		if ( valEmail !== true ) {
			error = true
			errMsg = valEmail
		}

		if (error) {
			$(errorAlert).show()
			$(errorAlert).html(errMsg)
		} else {

			var buttonText = $(button).html()
			$(button).html('Please Wait')
			$(button).attr("disabled", "disabled");

			Accounts.forgotPassword({email:$(email).val()}, function(error) {
				if (error) {
					$(errorAlert).show()
					$(errorAlert).html(error.reason)
					$(button).removeAttr('disabled')
					$(button).html(buttonText)
				} else {
					$(successAlert).show()
					$(successAlert).html('Email sent.  Click the link in the email.')
					$(button).removeAttr('disabled')
					$(button).html(buttonText)
				}
			})
		}
	}
})