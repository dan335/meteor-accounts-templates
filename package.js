Package.describe({
	name: "danimal:accounts-templates",
	summary: " \* Fill me in! *\ ",
	version: "0.0.1",
	git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use(['accounts-base', 'templating', 'session'], 'client');
  api.addFiles('common.js', ['server', 'client'])
  api.addFiles([
	'client/aChangePassword.html',
	'client/aChangePassword.js',
	'client/aCreateAccount.html',
	'client/aCreateAccount.js',
	'client/aForgotPassword.html',
	'client/aForgotPassword.js',
	'client/aSignin.html',
	'client/aSignin.js',
	], 'client');
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('danimal:accounts-templates');
//   api.addFiles('danimal:accounts-templates-tests.js');
// });