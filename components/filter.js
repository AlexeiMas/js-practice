exports.filter = function(callback) {
    const {arr} = this
    for (let i=0; i<this.length; i++) {
        if (callback(this[i]) === true)
        arr.push((this[i]))
    }
    return arr
}
