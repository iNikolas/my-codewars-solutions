function score(dice) {
    let score = 0
    const diceEdges = ['1', '2', '3', '4', '5', '6']
    let diceString = dice.join('')

    diceEdges.forEach(edge => {
        const regExp = new RegExp(edge, 'g')
        const matches = diceString.match(regExp) || []
        if (matches.length > 2) {
            switch (edge) {
                case '1':
                    score += 1000 + 100 * (matches.length - 3)
                    break
                case '2':
                    score += 200
                    break
                case '3':
                    score += 300
                    break
                case '4':
                    score += 400
                    break
                case '5':
                    score += 500 + 50 * (matches.length - 3)
                    break
                case '6':
                    score += 600
                    break
            }
        }
        if (matches.length < 3) {
            switch (edge) {
                case '1':
                    score += 100 * matches.length
                    break
                case '5':
                    score += 50 * matches.length
                    break
            }
        }
        diceString = diceString.replace(regExp, '')
    })
    return score
}

console.log(score([2, 4, 4, 5, 4]))