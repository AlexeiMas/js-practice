exports.indexOf = function(searchElement) {
    for(let i=0; i<this.length; i++)
    {
        if(searchElement(this[i])) return i
    }
    return -1
}
