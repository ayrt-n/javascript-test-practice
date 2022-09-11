function caesarCipherShiftAscii(ascii, shift) {
  // If shift is greater than 26 we are going in circle, normalize large shifts to find actual change
  const normalizedShift = shift % 26;
  let shiftedAscii = ascii + normalizedShift;

  switch (true) {
    case (ascii > 64 && ascii < 91): {
      if (shiftedAscii < 65) { shiftedAscii += 26; }
      if (shiftedAscii > 90) { shiftedAscii -= 26; }
      break;
    }
    case (ascii > 96 && ascii < 123): {
      if (shiftedAscii < 97) { shiftedAscii += 26; }
      if (shiftedAscii > 122) { shiftedAscii -= 26; }
      break;
    }
    default: {
      shiftedAscii = ascii;
      break;
    }
  }
  
  return shiftedAscii;
}

function caesarCipher(str, shift=0) {
  // Split string into array of characters
  const stringArray = str.split('');

  // Convert string array into array of ascii values and adjust by the specified shift
  const asciiArray = stringArray.map((char) => char.charCodeAt());
  const shiftedAsciiArray = asciiArray.map((val) => caesarCipherShiftAscii(val, shift));

  // Convert shifted ascii array back into characters and return the string
  const shiftedStringArray = shiftedAsciiArray.map((val) => String.fromCharCode(val));
  return shiftedStringArray.join('');
}

export default caesarCipher;
