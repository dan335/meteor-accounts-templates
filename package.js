Package.describe({
	name: "danimal:accounts-templates",
	summary: "Account templates for Meteor.",
	version: "1.0.7",
	git: "https://github.com/dan335/meteor-accounts-templates.git"
});

Package.onUse(function(api) {
	api.versionsFrom('1.2');
	api.use(['accounts-base', 'templating'], 'client');
	api.use('fortawesome:fontawesome@4.4.0', 'client')
	api.addFiles([
	  	'client/validation.js',
		'client/aChangePassword.html',
		'client/aChangePassword.js',
		'client/aCreateAccount.html',
		'client/aCreateAccount.js',
		'client/aForgotPassword.html',
		'client/aForgotPassword.js',
		'client/aSignin.html',
		'client/aSignin.js',
		'client/socialButtons.html',
		'client/socialButtons.js'
	], 'client');
});
