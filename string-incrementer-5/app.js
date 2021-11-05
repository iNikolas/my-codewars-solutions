function incrementString(strng) {
    const match = strng.match(/(?<name>^[a-z]+)?(?<number>\d+$)?/i)
    const name = match.groups.name || ''
    const number = match.groups.number || '0'
    let incrementedNumber = (+number + 1) + ''
    if (incrementedNumber.length < number.length) {
        const missingLeadingZerosAmount = number.length - incrementedNumber.length
        incrementedNumber = '0'.repeat(missingLeadingZerosAmount) + incrementedNumber
    }
    return name + incrementedNumber
}