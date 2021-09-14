exports.sortByDesc = function(column) {
    const {arr} = this
    arr.sort(function(a, b) {
        let a1 = eval(`a.${column}`)
        let b1 = eval(`b.${column}`)
        if(a1 === b1) return 0
        return (a1 < b1) ? 1 : -1
    })
    return arr
}
