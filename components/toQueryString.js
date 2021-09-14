exports.toQueryString = function() {
    const parameters = []
    for (let property in this) {
        if (this.hasOwnProperty(property)) {
            parameters.push(encodeURI(property + '=' + this[property]))
        }
    }

    return parameters.join('&')
}
