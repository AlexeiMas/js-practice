const {map} = require('./components/map')
const {filter} = require('./components/filter')
const {reduce} = require('./components/reduce')
const {every} = require('./components/every')
const {indexOf} = require('./components/indexOf')
const {toJSON} = require('./components/toJSON')
const {toQueryString} = require('./components/toQueryString')
const {isEmpty} = require('./components/isEmpty')
const {find} = require('./components/find')
const {avg} = require('./components/avg')
const {chunk} = require('./components/chunk')
const {skipUntil} = require('./components/skipUntil')
const {contains} = require('./components/contains')
const {normalize} = require('./components/normalize')
const {pluck} = require('./components/pluck')
const {unique} = require('./components/unique')
const {fill} = require('./components/fill')
const {sort} = require('./components/sort')
const {sortDesc} = require('./components/sortDesc')
const {sortBy} = require('./components/sortBy')
const {sortByDesc} = require('./components/sortByDesc')

const {page} = require('./components/pagination/page')
const {paginate} = require('./components/pagination/paginate')
const {count} = require('./components/pagination/count')
const {current} = require('./components/pagination/current')
const {next} = require('./components/pagination/next')
const {prev} = require('./components/pagination/prev')
const {first} = require('./components/pagination/first')
const {last} = require('./components/pagination/last')
const {reset} = require('./components/pagination/reset')

const {toPagination} = require('./components/pagination/toPagination')

function Collection(arr) {
    this.arr = arr
}

function Pagination(collection, limit) {
    this.collection = collection
    this.limit = limit
}

function make (constructor, ...args) {
    const obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    return constructor.apply(obj, args) || obj
}

Collection.prototype.map = map
Collection.prototype.filter = filter
Collection.prototype.reduce = reduce
Collection.prototype.every = every
Collection.prototype.indexOf = indexOf
Collection.prototype.toJSON = toJSON
Collection.prototype.toQueryString = toQueryString
Collection.prototype.isEmpty = isEmpty
Collection.prototype.find = find
Collection.prototype.avg = avg
Collection.prototype.chunk = chunk
Collection.prototype.skipUntil = skipUntil
Collection.prototype.contains = contains
Collection.prototype.normalize = normalize
Collection.prototype.pluck = pluck
Collection.prototype.unique = unique
Collection.prototype.fill = fill
Collection.prototype.sort = sort
Collection.prototype.sortDesc = sortDesc
Collection.prototype.sortBy = sortBy
Collection.prototype.sortByDesc = sortByDesc

Pagination.prototype.page = page
Pagination.prototype.paginate = paginate
Pagination.prototype.count = count
Collection.prototype.paginate = paginate
Collection.prototype.current = current
Collection.prototype.next = next
Collection.prototype.prev = prev
Collection.prototype.first = first
Collection.prototype.last = last
Collection.prototype.reset = reset

let arr = make(Collection,[{age: 1}, {age: 10}, {age: 4}, {age: 60}])
// let arr = Collection.make([145,21,13,445])
// let arr = Collection.make([112,25,345,41])
// let arr = Collection.make([{a: 1}, {a: 2}])
let res = arr.sortByDesc("age")
    // .map(item => item * 2).reduce((acc, item) => acc+item)
    // .filter(item => item > 2)
    // arr.every(item => item > 2)
    // arr.find(item => item > 2)
    // arr.avg()
    // arr.chunk(2)
    // arr.skipUntil(2)
    // arr.contains(2)
    // arr.unique()
    // arr.fill(5, 0)

    // let arr = Collection.make([112,25,345,41])
    // let res = arr.normalize(100)

    // let arr = Collection.make([{a: 1}, {a: 2}])
    // let res = arr.pluck('a')

    // let arr = Collection.make([{age: 1}, {age: 10}, {age: 4}, {age: 60}])
    // let res = arr.sortBy("age")

console.log(res)

//Task 20
let testData4 = [
    {
        name: "Vasya",
        email: "vasya@example.com",
        age: 20,
    },
    {
        name: "Dima",
        email: "dima@example.com",
        age: 34,
    },
    {
        name: "Colya",
        email: "colya@example.com",
        age: 46,
    },
    {
        name: "Misha",
        email: "misha@example.com",
        age: 16,
    },
    {
        name: "Ashan",
        email: "ashan@example.com",
        age: 99,
    },
    {
        name: "Rafshan",
        email: "rafshan@example.com",
        age: 11,
    },
    1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false,
    [[[[1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false, [{
        name: "Rafshan",
        email: "rafshan@example.com",
        age: 11,
    }]]]]]
]

const data = make(Collection, testData4.filter(item => item.age))
    .sortBy("age")
    .map(item => item.name)
console.log("Task 20:", data)

const arr2 = make(Pagination, make(Collection,[1, 2, 3, 4, 5, 6]), 5)
console.log("Task 16:", arr2.page(2))
console.log("Task 16:", make(Pagination, arr2.paginate(1)).page(2))
console.log("Task 16 Count:", arr2.count())

console.log("Task 17:", make(Pagination, make(Collection, ([1, 2, 3, 4, 5, 6])).paginate(5)).page(2))
console.log("Task 18:", make(Collection, ([1, 2, 3, 4, 5, 6])).paginate(2))
console.log("Task 18:", make(Collection, (make(Collection, ([1, 2, 3, 4, 5, 6])).paginate(2))).next())

//Task 22
console.log("Task 22:", make(Collection,(make(Collection, toPagination([1, 2], 1)).first())).toJSON())
console.log("Task 22:", make(Collection,(make(Collection, toPagination(make(Collection, [1, 2]), 1))).first()).toJSON())
console.log("Task 22:", make(Collection,(make(Collection, toPagination(false, 1)).first())).toJSON())
console.log("Task 22:", make(Collection,(make(Collection, toPagination(false, true, 1, 2, 10)).first())).toJSON())

