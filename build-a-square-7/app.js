function generateShape(integer) {
  return ("+".repeat(integer) + "\n").repeat(integer - 1) + "+".repeat(integer);
}
