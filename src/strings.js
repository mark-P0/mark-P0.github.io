/*  MDN Suggestions for Base64 Encryption
 *  https://developer.mozilla.org/en-US/docs/Glossary/Base64#solution_1_%E2%80%93_escaping_the_string_before_encoding_it
 */

function encrypt(str) {
  return btoa(encodeURIComponent(str));
}

function decrypt(str) {
  return decodeURIComponent(atob(str));
}

// const _ = encrypt('...');
// console.log([_, decrypt(_)]);

/* cspell:disable */
const strings = {
  NAME: 'TWFyayUyMFBvc28=',
  HEADER_MAIN: ['SGkhJTIwSSVFMiU4MCU5OW0=', 'TWFyay4='],
  HEADER_TEXT_HEADING: 'V2hvJTIwYW0lMjBJ',
  HEADER_TEXT_HEADING_LINK:
    'aHR0cHMlM0ElMkYlMkZlbi53aWtpcGVkaWEub3JnJTJGd2lraSUyRldob2FtaQ==',
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
  HEADER_RESUME: 'UmVzdW0lQzMlQTk=',
  PROJECTS_HEADING: 'V2hhdCUyMEklMjBEbw==',
  FOOTER_HEADING: 'VGFsayUyMFRvJTIwTWU=',
  FOOTER_TEXT:
    'RG8lMjBvdXIlMjBpbnRlcmVzdHMlMjBhbGlnbiUzRiUyMFBsZWFzZSUyMGdldCUyMGluJTIwdG91Y2gh',
  FOOTER_LOCATION:
    'RGFzbWFyaSVDMyVCMWFzJTJDJTIwQ2F2aXRlJTJDJTIwUGhpbGlwcGluZXM=',
  FOOTER_CONTACT: 'KCUyQjYzKTklMjAxOSUyMDIwNSUyMDU1NjQ=',
  LINK_VCS: 'aHR0cHMlM0ElMkYlMkZnaXRodWIuY29tJTJGbWFyay1QMCUyRg==',
  LINK_SOCIAL:
    'aHR0cHMlM0ElMkYlMkZ3d3cubGlua2VkaW4uY29tJTJGaW4lMkZwb3NvLW1hcmtqb2huJTJG',
  LINK_ADDRESS: 'bWFpbHRvJTNBbWFya2pvaG4ucG9zbyU0MG91dGxvb2sucGg=',
};
/* cspell:enable */

export default strings;
export { encrypt, decrypt };
