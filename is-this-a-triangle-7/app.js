function isTriangle(a, b, c) {
  const args = [...arguments];
  const maxSegment = Math.max(...args);
  const maxSegmentIndex = args.findIndex((element) => element === maxSegment);
  args.splice(maxSegmentIndex, 1);
  return (
    maxSegment < args.reduce((accumulator, value) => accumulator + value, 0)
  );
}
