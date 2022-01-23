Array.prototype.sameStructureAs = function (other) {
  if (!Array.isArray(other) || this.length !== other.length) return false;
  if (
    !other.find((element) => Array.isArray(element)) &&
    !this.find((element) => Array.isArray(element))
  )
    return true;
  let result = true;

  this.forEach((element, index) => {
    if (typeof element !== typeof other[index]) return (result = false);
    if (Array.isArray(element))
      result = result && element.sameStructureAs(other[index]);
  });

  return result;
};
