exports.paginate = function (limit) {
    const {collection, arr} = this
    let data
    (collection !== undefined) ? data = collection.arr : data = arr
    function* array_chunk (arr, count) {
        for (let i = 0; i < arr.length; i += count) {
            yield arr.slice(i, i + count)
        }
    }
    return [...array_chunk(data, limit)]
}
