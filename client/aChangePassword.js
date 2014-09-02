Template.aChangePassword.events({
	'click #cp-submitButton': function(event, template) {
		event.preventDefault()

		var pass = template.find('#cp-password')
		var newPass = template.find('#cp-newPassword')
		var successAlert = template.find('#cp-successAlert')
		var errorAlert = template.find('#cp-errorAlert')
		var button = template.find('#cp-submitButton')

		$(errorAlert).hide()
		$(successAlert).hide()

		var buttonText = $(button).html()
		$(button).html('Please Wait')
		$(button).attr("disabled", "disabled")

		Accounts.changePassword($(pass).val(), $(newPass).val(), function(error) {
			if (error) {
				$(errorAlert).show()
				$(errorAlert).html(error.reason)
				$(button).removeAttr('disabled')
				$(button).html(buttonText)
			} else {
				$(successAlert).show()
				$(successAlert).html('Password Changed')
				$(button).removeAttr('disabled')
				$(button).html(buttonText)
			}
		})
	}
})