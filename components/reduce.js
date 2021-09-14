exports.reduce = function(callback) {
    let a = 0
    for (let i=0; i<this.length; i++) {
        callback(a = a + this[i])
    }
    return a
}
