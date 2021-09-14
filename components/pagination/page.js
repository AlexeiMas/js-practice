exports.page = function (page = 2) {
    const {collection, limit = 1} = this
    let data
    page--
    (collection.hasOwnProperty('arr')) ? data = collection.arr : data = collection
    return data.slice(page * limit, page * limit + limit)
}
