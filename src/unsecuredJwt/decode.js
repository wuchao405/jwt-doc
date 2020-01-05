function decode(jwt) {
  const [headerB64, payloadB64] = jwt.split(".");
  // These supports parsing the URL safe variant of Base64 as well.
  const headerStr = new Buffer(headerB64, "base64").toString();
  const payloadStr = new Buffer(payloadB64, "base64").toString();
  return {
    header: JSON.parse(headerStr),
    payload: JSON.parse(payloadStr)
  };
}
