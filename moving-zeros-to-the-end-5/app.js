var moveZeros = function (arr) {
    const rest = []
    const zeros = []
    arr.forEach((entry) => {
        if (entry === 0) {
            zeros.push(entry)
        } else {
            rest.push(entry)
        }
    })
    return [...rest, ...zeros]
}