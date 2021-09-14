exports.count = function () {
    const {collection, limit} = this
    let data = collection.arr
    return Math.ceil(data.length / limit)
}
