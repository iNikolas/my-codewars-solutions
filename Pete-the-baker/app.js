function cakes(recipe, available) {
    let maxPortions = []
    const recipeList = Object.keys(recipe)

    recipeList.forEach((ingredient) => {
        const portionAmount = Math.floor(available[ingredient] / recipe[ingredient])
        if (portionAmount) {
            maxPortions.push(portionAmount)
        } else {
            return maxPortions.push(0)
        }
    })

    return Math.min(...maxPortions)
}