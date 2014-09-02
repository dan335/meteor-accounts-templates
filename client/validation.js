validateUsername = function (username) {
  if (username.length >= 3) {
    return true;
  } else {
    return 'Username must be at least 3 characters long';
  }
};

validateEmail = function (email) {
  if (email.indexOf('@') !== -1) {
    return true;
  } else {
    return 'Invalid email';
  }
};

validatePassword = function (password) {
  if (password.length >= 6) {
    return true;
  } else {
    return 'Password must be at least 6 characters long';
  }
};