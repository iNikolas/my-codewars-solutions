const mix = (s1, s2) => {
  const charHashTable = {};
  const result = [];
  let maxStringLength = 0;

  s1.replace(/[a-z]/g, (match) => fillCharHashTableByIndex(0, match));
  s2.replace(/[a-z]/g, (match) => fillCharHashTableByIndex(1, match));
  const charHashTableEntries = Object.values(charHashTable).map((record) => {
    if (record[0] === undefined) record[0] = "";
    if (record[1] === undefined) record[1] = "";
    maxStringLength = Math.max(
      maxStringLength,
      record[1].length,
      record[0].length
    );
    if (record[1].length > record[0].length) return ["2:", record[1]];
    if (record[0].length > record[1].length) return ["1:", record[0]];
    return ["=:", record[0]];
  });

  for (let i = maxStringLength; i >= 2; i--) {
    const recordsByLength = charHashTableEntries
      .filter((record) => record[1].length === i)
      .map((record) => record[0] + record[1])
      .sort();
    result.push(...recordsByLength);
  }

  return result.join("/");

  function fillCharHashTableByIndex(index, match) {
    if (!charHashTable[match]) charHashTable[match] = [];
    if (!charHashTable[match][index]) charHashTable[match][index] = match;
    else charHashTable[match][index] += match;
  }
};
