exports.skipUntil = function(n) {
    const {arr} = this
    for (let i=0; i<arr.length; i++) {
        if (arr[i]%n === 0) {
            arr.splice(i, 1)
        }
    }
    return arr
}
