/**
 * MDN suggestions for base-64 encryption
 *
 * Basic solution is deemed sufficient as these are used only to naively obfuscate string information
 *
 * https://developer.mozilla.org/en-US/docs/Glossary/Base64#solution_1_%E2%80%93_escaping_the_string_before_encoding_it
 */
null;

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
export const NAME = decrypt("TWFyayUyMFBvc28=");
export const HEADER_MAIN = [
  decrypt("SGkhJTIwSSVFMiU4MCU5OW0="),
  decrypt("TWFyay4="),
];
export const HEADER_TEXT_HEADING = decrypt("V2hvJTIwYW0lMjBJ");
export const HEADER_TEXT_HEADING_LINK = decrypt(
  "aHR0cHMlM0ElMkYlMkZlbi53aWtpcGVkaWEub3JnJTJGd2lraSUyRldob2FtaQ=="
);
export const HEADER_TEXT = [
  decrypt("SSVFMiU4MCU5OW0lMjBh"),
  decrypt("d2ViJTIwYW5kJTIwc29mdHdhcmUlMjBkZXZlbG9wZXI="),
  decrypt("KFNvb24lRTIlODQlQTIp"),
  decrypt("d2hvJTIwc3R1ZGllZA=="),
  decrypt("Y29tcHV0ZXIlMjBlbmdpbmVlcmluZy4="),
  decrypt("SSUyMGNyYWZ0JTIwZXhwZXJpZW5jZXMlMjB1c2luZyUyMHRvb2xzJTIwaW4="),
  decrypt("SlM="),
  decrypt("JTdD"),
  decrypt("VFM="),
  decrypt("JTI2"),
  decrypt("UHl0aG9u"),
  decrypt("Zm9yJTIwYm90aCUyMG1vYmlsZSUyMGFuZCUyMHRoZSUyMHdlYi4="),
  decrypt("UFMlM0ElMjBJJTIwZGFiYmxlJTIwaW4lMjBkYXRhJTIwc2NpZW5jZSUyMHRvbyE="),
];
export const HEADER_RESUME = decrypt("UmVzdW0lQzMlQTk=");
export const PROJECTS_HEADING = decrypt("V2hhdCUyMEklMjBEbw==");
export const FOOTER_HEADING = decrypt("VGFsayUyMFRvJTIwTWU=");
export const FOOTER_TEXT = [
  decrypt("SW50ZXJlc3RlZCUzRiUyMFBsZWFzZSUyMHJlYWNoJTIwb3V0IQ=="),
  decrypt(
    "RG8lMjBvdXIlMjBpbnRlcmVzdHMlMjBhbGlnbiUzRiUyMFBsZWFzZSUyMGdldCUyMGluJTIwdG91Y2gh"
  ),
];
export const FOOTER_LOCATION = [
  decrypt("RGFzbWFyaSVDMyVCMWFzJTJDJTIwQ2F2aXRl"),
  decrypt("JTJDJTIwUGhpbGlwcGluZXM="),
];
export const FOOTER_CONTACT = decrypt("KCUyQjYzKSUyMDkxOSUyMDIwNSUyMDU1NjQ=");
export const LINK_VCS = decrypt(
  "aHR0cHMlM0ElMkYlMkZnaXRodWIuY29tJTJGbWFyay1QMCUyRg=="
);
export const LINK_SOCIAL = decrypt(
  "aHR0cHMlM0ElMkYlMkZ3d3cubGlua2VkaW4uY29tJTJGaW4lMkZwb3NvLW1hcmtqb2huJTJG"
);
export const LINK_ADDRESS = decrypt("bWFya2pvaG4ucG9zbyU0MG91dGxvb2sucGg=");
export const ALT_FOOTER_BG = decrypt(
  "QXV0aG9yJTIwYmVoaW5kJTIwaG9iYnklMjBBcmR1aW5vJTIwY2lyY3VpdA=="
);

export const RESUME_FILENAME = decrypt("UmVzdW1lJTJDTWFya0pvaG5Qb3NvLnBkZg==");
export const PORTRAIT_FILENAME = decrypt(
  "UG9ydHJhaXQlMkNNYXJrSm9oblBvc28uanBn"
);
/* cspell:enable */
