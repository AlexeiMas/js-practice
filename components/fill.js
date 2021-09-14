exports.fill = function(len, val) {
    const {arr} = this
    for (let i=0; i<len; i++) arr[i] = val
    return arr
}
