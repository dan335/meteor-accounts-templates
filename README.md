Simple templates for accounts-password that can be placed within a page.

* {{> aCreateAccount}}
* {{> aSignin}}
* {{> aChangePassword}}
* {{> aForgotPassword}}
* {{> aGoogleButton}}
* {{> aFacebookButton}}
* {{> aSocialError}}

Change password and forgot password require the accounts-ui package.  Does not conflict with accounts-ui, they can both be used on the same page.  These templates aren't reactive, you must provide the reactivity and links.

Works with Bootstrap 3.  Requires font awesome.

See http://dominusgame.net for an example.
