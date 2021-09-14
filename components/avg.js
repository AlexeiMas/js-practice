exports.avg = function() {
    const {arr} = this
    let total = 0
    for (let i=0; i<arr.length; i++) {
        total += arr[i]
    }
    return total / arr.length
}
