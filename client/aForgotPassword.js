Template.aForgotPassword.events({
	'click #fp-submitButton': function(event, template) {
		event.preventDefault()

		var email = template.find('#fp-email')
		var successAlert = template.find('#fp-successAlert')
		var errorAlert = template.find('#fp-errorAlert')
		var button = event.currentTarget

		$(errorAlert).hide()
		$(successAlert).hide()

		var buttonText = $(button).html
		$(button).html('Please Wait')
		$(button).attr("disabled", "disabled");

		Accounts.forgotPassword({email:$(email).val()}, function(error) {
			if (error) {
				$(errorAlert).show()
				$(errorAlert).html(error.reason)
				$(button).removeAttr('disabled')
				$(button).html = buttonText
			} else {
				$(successAlert).show()
				$(successAlert).html('Email sent')
				$(button).removeAttr('disabled')
				$(button).html = buttonText
			}
		})
	}
})