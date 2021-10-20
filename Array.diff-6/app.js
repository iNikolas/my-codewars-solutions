function arrayDiff(a, b) {
    const [currentFilter, ...restFilters] = b
    const filtered = a.filter((element) => element !== currentFilter)
    if (b.length < 2) return filtered

    return arrayDiff(filtered, restFilters)
}