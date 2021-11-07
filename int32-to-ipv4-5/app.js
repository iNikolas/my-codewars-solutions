function int32ToIp(int32) {
  const bits = int32
    .toString(2)
    .split("")
    .reverse()
    .join("")
    .match(
      /^(?<bit0>[01]{1,8})(?<bit1>[01]{1,8})?(?<bit2>[01]{1,8})?(?<bit3>[01]{1,8})?/
    ).groups;
  const byte3 = bits.bit3 ? reflectAndBackToDec(bits.bit3) : 0;
  const byte2 = bits.bit2 ? reflectAndBackToDec(bits.bit2) : 0;
  const byte1 = bits.bit1 ? reflectAndBackToDec(bits.bit1) : 0;
  const byte0 = bits.bit0 ? reflectAndBackToDec(bits.bit0) : 0;
  return byte3 + "." + byte2 + "." + byte1 + "." + byte0;
}

function reflectAndBackToDec(reflectedBinString) {
  return parseInt(reflectedBinString.split("").reverse().join(""), 2);
}