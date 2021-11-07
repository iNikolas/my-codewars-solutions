function sumStrings(a,b) {
    if (!a) a = 0
    if (!b) b = 0
    a = BigInt(a)
    b = BigInt(b)
    return (a + b) + ''
}