export default function caesarCipher(string, shiftKey) {
  const array = splitString(string);

  const unicodeChars = convertAndIncrement(array, shiftKey);

  let convertedString = '';

  for (let i = 0; i < unicodeChars.length; i++) {
    convertedString = convertedString.concat('', String.fromCharCode(unicodeChars[i]));
  }

  return convertedString;
}

function splitString(string) {
  return string.split('');
}

function convertAndIncrement(array, key) {
  let convertToUtf = [];

  for (let i = 0; i < array.length; i++) {
    let current = array[i].charCodeAt();
    let incrementedNum = current + key;
    
    if ((current >= 65 && current <= 90) && incrementedNum > 90) {
      incrementedNum -= 90;
      incrementedNum += 64;
    } else if ((current >= 97 && current <= 122) && incrementedNum > 122) {
      incrementedNum -= 122;
      incrementedNum += 96;
    } else if ((current >= 32 && current <= 47) && incrementedNum > 47) {
      incrementedNum -= 47;
      incrementedNum += 31;
    } else if ((current >= 58 && current <= 64) && incrementedNum > 64) {
      incrementedNum -= 64;
      incrementedNum += 57;
    } else if ((current >= 91 && current <= 96) && incrementedNum > 96) {
      incrementedNum -= 96;
      incrementedNum += 90;
    } else if ((current >= 123 && current <= 127) && incrementedNum > 127) {
      incrementedNum -= 127;
      incrementedNum += 122;
    }

    convertToUtf = convertToUtf.concat(incrementedNum);
  }

  return convertToUtf;
}