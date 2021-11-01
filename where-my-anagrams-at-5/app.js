function anagrams(word, words) {
    const result = []
    words.forEach(anagram => {
        if (word.length !== anagram.length) return
        let wordCopy = word
        for (const index in anagram) {
            const rexExp = new RegExp(anagram[index], 'i')
            wordCopy = wordCopy.replace(rexExp, '')
        }
        if (wordCopy.length === 0 ) result.push(anagram)
    })
    return result
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
