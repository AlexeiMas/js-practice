exports.unique = function() {
    const {arr} = this
    const res = []
    for (let i=0; i<arr.length; i++) {
        if (res.indexOf(arr[i]) === -1 && arr[i] !== '') res.push(arr[i])
    }
    return res
}
