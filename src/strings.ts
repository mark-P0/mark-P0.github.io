/**
 * MDN Suggestions for Base64 Encryption
 * Basic solution is deemed sufficient as these are used only to naively obfuscate string information
 * https://developer.mozilla.org/en-US/docs/Glossary/Base64#solution_1_%E2%80%93_escaping_the_string_before_encoding_it
 */

export function encrypt(str: string): string {
  return btoa(encodeURIComponent(str));
}

export function decrypt(str: string): string {
  return decodeURIComponent(atob(str));
}

// /* prettier-ignore */
// const _ = `
// `.trim().split('\n').map(encrypt);
// console.log([_, _.map(decrypt)]);

/* cspell:disable */
export const NAME = "TWFyayUyMFBvc28=";
export const HEADER_MAIN = ["SGkhJTIwSSVFMiU4MCU5OW0=", "TWFyay4="];
export const HEADER_TEXT_HEADING = "V2hvJTIwYW0lMjBJ";
export const HEADER_TEXT_HEADING_LINK =
  "aHR0cHMlM0ElMkYlMkZlbi53aWtpcGVkaWEub3JnJTJGd2lraSUyRldob2FtaQ==";
export const HEADER_TEXT = [
  "SSVFMiU4MCU5OW0lMjBh",
  "d2ViJTIwYW5kJTIwc29mdHdhcmUlMjBkZXZlbG9wZXI=",
  "KFNvb24lRTIlODQlQTIp",
  "d2hvJTIwc3R1ZGllZA==",
  "Y29tcHV0ZXIlMjBlbmdpbmVlcmluZy4=",
  "SSUyMGNyYWZ0JTIwZXhwZXJpZW5jZXMlMjB1c2luZyUyMHRvb2xzJTIwaW4=",
  "SlM=",
  "JTdD",
  "VFM=",
  "JTI2",
  "UHl0aG9u",
  "Zm9yJTIwYm90aCUyMG1vYmlsZSUyMGFuZCUyMHRoZSUyMHdlYi4=",
  "UFMlM0ElMjBJJTIwZGFiYmxlJTIwaW4lMjBkYXRhJTIwc2NpZW5jZSUyMHRvbyE=",
];
export const HEADER_RESUME = "UmVzdW0lQzMlQTk=";
export const PROJECTS_HEADING = "V2hhdCUyMEklMjBEbw==";
export const FOOTER_HEADING = "VGFsayUyMFRvJTIwTWU=";
export const FOOTER_TEXT = [
  "SW50ZXJlc3RlZCUzRiUyMFBsZWFzZSUyMHJlYWNoJTIwb3V0IQ==",
  "RG8lMjBvdXIlMjBpbnRlcmVzdHMlMjBhbGlnbiUzRiUyMFBsZWFzZSUyMGdldCUyMGluJTIwdG91Y2gh",
];
export const FOOTER_LOCATION = [
  "RGFzbWFyaSVDMyVCMWFzJTJDJTIwQ2F2aXRl",
  "JTJDJTIwUGhpbGlwcGluZXM=",
];
export const FOOTER_CONTACT = "KCUyQjYzKSUyMDkxOSUyMDIwNSUyMDU1NjQ=";
export const LINK_VCS = "aHR0cHMlM0ElMkYlMkZnaXRodWIuY29tJTJGbWFyay1QMCUyRg==";
export const LINK_SOCIAL =
  "aHR0cHMlM0ElMkYlMkZ3d3cubGlua2VkaW4uY29tJTJGaW4lMkZwb3NvLW1hcmtqb2huJTJG";
export const LINK_ADDRESS = "bWFpbHRvJTNBbWFya2pvaG4ucG9zbyU0MG91dGxvb2sucGg=";
export const ALT_FOOTER_BG =
  "QXV0aG9yJTIwYmVoaW5kJTIwaG9iYnklMjBBcmR1aW5vJTIwY2lyY3VpdA==";

export const RESUME_FILENAME = "UmVzdW1lJTJDTWFya0pvaG5Qb3NvLnBkZg==";
/* cspell:enable */
