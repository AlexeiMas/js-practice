let {cursor} = require('./cursor')
exports.prev = function () {
    const {arr} = this
    cursor--
    cursor < 0 ? (cursor = arr.length-1) : cursor
    return arr[cursor]
}
