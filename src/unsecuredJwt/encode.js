/**
 * base64
 * @param {*} str 
 */
function b64(str) {
  return new Buffer(str)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

/**
 * encode
 * @param {*} header 
 * @param {*} payload 
 */
function encode(header, payload) {
  const headerEnc = b64(JSON.stringify(header));
  const payloadEnc = b64(JSON.stringify(payload));
  return `${headerEnc}.${payloadEnc}`;
}
