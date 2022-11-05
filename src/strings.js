/*  MDN Suggestions for Base64 Encryption
 *  https://developer.mozilla.org/en-US/docs/Glossary/Base64#solution_1_%E2%80%93_escaping_the_string_before_encoding_it
 */

function encrypt(str) {
  return btoa(encodeURIComponent(str));
}

function decrypt(str) {
  return decodeURIComponent(atob(str));
}

const strings = {
  NAME: 'TWFyayUyMFBvc28=',
  HEADER_MAIN: ['SGkhJTIwSSVFMiU4MCU5OW0=', 'TWFyay4='],
  HEADER_TEXT_HEADING: 'V2hvJTIwYW0lMjBJ',
  HEADER_TEXT: [
    'SSVFMiU4MCU5OW0lMjBh',
    'd2ViJTIwYW5kJTIwc29mdHdhcmUlMjBkZXZlbG9wZXI=',
    'KFNvb24lRTIlODQlQTIp',
    'd2hvJTIwc3R1ZGllZA==',
    'Y29tcHV0ZXIlMjBlbmdpbmVlcmluZy4=',
    'SSUyMGNyYWZ0JTIwZXhwZXJpZW5jZXMlMjB1c2luZyUyMHRvb2xzJTIwaW4=',
    'SlM=',
    'JTdD',
    'VFM=',
    'JTI2',
    'UHl0aG9u',
    'Zm9yJTIwYm90aCUyMG1vYmlsZSUyMGFuZCUyMHRoZSUyMHdlYi4=',
    'UFMlM0ElMjBJJTIwZGFiYmxlJTIwaW4lMjBkYXRhJTIwc2NpZW5jZSUyMHRvbyE=',
  ],
  PROJECTS_HEADING: 'V2hhdCUyMEklMjBEbw==',
};

export default strings;
export { encrypt, decrypt };
