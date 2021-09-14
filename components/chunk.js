exports.chunk = function(size) {
    const {arr} = this
    let result = []
    while(arr.length) {
        result.push(arr.splice(0, size))
    }
    return result
}
