function validParentheses(parens) {
  let openingParentheses = 0;
  let closingParentheses = 0;

  parens.split("").forEach((letter) => {
    if (closingParentheses > openingParentheses) return;
    if (letter === "(") openingParentheses++;
    if (letter === ")") closingParentheses++;
  });
  return openingParentheses === closingParentheses;
}
