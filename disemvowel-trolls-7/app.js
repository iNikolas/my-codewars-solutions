function disemvowel(str) {
    let result = str.split('')
    const vowels = ['a', 'e', 'i', 'o', 'u']
    vowels.forEach(vowel => {
        result = result.filter((letter) => {
            return letter.toLowerCase() !== vowel
        })
    })
    return result.join('')
}