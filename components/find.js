exports.find = function(searchElement) {
    for(let i=0; i<this.length; i++)
    {
        if(searchElement(this[i])) return this[i]
    }
    return undefined
}
