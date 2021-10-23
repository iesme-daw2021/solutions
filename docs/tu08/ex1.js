function checkPassword(password) {
  const letters = 'aáàbcçdeéèfghiíìjklmnñoóòppqrstuúüùvwxyz';
  const numbers = '0123456789';

  let hasLowerChars = false;
  let hasUpperChars = false;
  let hasNumber = false;
  let hasSpecialChar = false;
  let i = 0;

  if (password.length < 8) {
    return false;
  }

  while (i < password.length) {
    let caracter = password.charAt(i);
    if (letters.indexOf(caracter) != -1) {
      hasLowerChars = true;
    } else if (letters.toUpperCase().indexOf(caracter) != -1) {
      hasUpperChars = true;
    } else if (numbers.indexOf(caracter) != -1) {
      hasNumber = true;
    } else {
      hasSpecialChar = true;
    }
    i++;
  }
  return hasLowerChars && hasUpperChars && hasNumber && hasSpecialChar;
}

export default checkPassword;
