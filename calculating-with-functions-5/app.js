function zero() {
    const number = 0
    return calculationAlgorithm(arguments, number)
}

function one() {
    const number = 1
    return calculationAlgorithm(arguments, number)
}

function two() {
    const number = 2
    return calculationAlgorithm(arguments, number)
}

function three() {
    const number = 3
    return calculationAlgorithm(arguments, number)
}

function four() {
    const number = 4
    return calculationAlgorithm(arguments, number)
}

function five() {
    const number = 5
    return calculationAlgorithm(arguments, number)
}

function six() {
    const number = 6
    return calculationAlgorithm(arguments, number)
}

function seven() {
    const number = 7
    return calculationAlgorithm(arguments, number)
}

function eight() {
    const number = 8
    return calculationAlgorithm(arguments, number)
}

function nine() {
    const number = 9
    return calculationAlgorithm(arguments, number)
}

function plus(num) {
    return [(a, b) => a + b, num]
}

function minus(num) {
    return [(a, b) => a - b, num]
}

function times(num) {
    return [(a, b) => a * b, num]
}

function dividedBy(num) {
    return [(a, b) => Math.floor(a / b), num]
}

function calculationAlgorithm(arg, number) {
    if (arg.length === 0) return number
    return arg[0][0](number, arg[0][1])
}