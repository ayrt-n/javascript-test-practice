function capitalize(string) {
  let stringArray = string.split('');
  stringArray[0] = stringArray[0].toUpperCase();

  return stringArray.join('');
}

function reverseString(string) {
  const stringArray = string.split('');
  const stringLength = stringArray.length - 1;

  for (let i = 0; i < stringLength / 2; i++) {
    const tmp = stringArray[stringLength - i];
    stringArray[stringLength - i] = stringArray[i];
    stringArray[i] = tmp;
  }

  return stringArray.join('');
}

export {
  capitalize,
  reverseString,
};
