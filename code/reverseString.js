export default function reverseString(string) {
  let splitString = string.split('');

  let reversed = '';

  for (let i = splitString.length - 1; i >= 0; i--) {
    reversed += [... splitString[i]];
  }

  return reversed;
}