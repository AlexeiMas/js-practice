exports.map = function(callback) {
    const {arr} = this
    for (let i=0; i<this.length; i++) {
        arr.push(callback(this[i]))
    }
    return arr
}
