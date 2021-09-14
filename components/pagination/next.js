let {cursor} = require('./cursor')
exports.next = function () {
    const {arr} = this
    cursor++
    cursor > arr.length - 1 ? cursor = 0 : cursor
    return arr[cursor]
}
