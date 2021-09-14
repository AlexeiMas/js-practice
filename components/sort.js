exports.sort = function () {
    const {arr} = this
    for (let i = 0; i < arr.length; i++) {
        let target = arr[i]
        for (var j = i - 1; j >= 0 && (arr[j] > target); j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = target
    }
    return arr
}
