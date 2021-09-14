let {cursor} = require('./cursor')
exports.current = function () {
    const {arr} = this
    if((cursor <= arr.length - 1) && (cursor >= 0)){
        return arr[cursor]
    }
    else{
        return 'Object index exceeds collection range.'
    }
}
