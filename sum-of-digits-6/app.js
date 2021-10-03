function digital_root(n) {
    if (n < 10) return n
    const provisionalRes =  ('' + n).split('').reduce((accumulator, number) => {
        return accumulator + +number
    }, 0)
    return digital_root(provisionalRes)
}

const res = 15534
console.log(digital_root(res))