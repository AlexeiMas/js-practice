exports.contains = function(val) {
    const {arr} = this
    let i = arr.length
    while (i--) {
        if (arr[i] === val) return true
    }
    return false
}
