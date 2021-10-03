String.prototype.toJadenCase = function() {
    return this.replace(/(^|\s)[a-z]/g, function(s){ return s.toUpperCase() });
};

const str = 'how can mirrors be real if our eyes aren\'t real'.toJadenCase()
console.log(str);