exports.pluck = function(name) {
    const {arr} = this
    const res = []
    for (let i in arr) {
        if (arr[i].hasOwnProperty(name)) {
            res.push(arr[i][name])
        }
    }
    return res
}
