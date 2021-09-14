exports.normalize = function(val) {
    const {arr} = this
    let i = arr.length;

    while (i--) arr[i] > val && (val = arr[i])
    val /= 100
    i = arr.length

    while (i--) arr[i] = Math.round(arr[i] / val)

    return arr
}
