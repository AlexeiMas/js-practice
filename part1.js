let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1]
let testData3 = [
    {
        name: "Vasya",
        email: "vasya@example.com",
        age: 20,
        skills: {
            php: 0,
            js: -1,
            madness: 10,
            rage: 10
        }
    },
    {
        name: "Dima",
        email: "dima@example.com",
        age: 34,
        skills: {
            php: 5,
            js: 7,
            madness: 3,
            rage: 2
        }
    },
    {
        name: "Colya",
        email: "colya@example.com",
        age: 46,
        skills: {
            php: 8,
            js: -2,
            madness: 1,
            rage: 4
        }
    },
    {
        name: "Misha",
        email: "misha@example.com",
        age: 16,
        skills: {
            php: 6,
            js: 6,
            madness: 5,
            rage: 2
        }
    },
    {
        name: "Ashan",
        email: "ashan@example.com",
        age: 99,
        skills: {
            php: 0,
            js: 10,
            madness: 10,
            rage: 1
        }
    },
    {
        name: "Rafshan",
        email: "rafshan@example.com",
        age: 11,
        skills: {
            php: 0,
            js: 0,
            madness: 0,
            rage: 10
        }
    },
]
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

//Task 1
array_find = (arr, search) => arr.filter(item => item === search || String(item).match(search))

let result = array_find(testData, /^raf.*/i)
let result2 = array_find(testData, "Rafshan")
console.log("Task 1:", result, result2)

//Task 2
array_avg = (arr, skipNaN = false) => {
    const notNaNArr = arr.filter(Number.isFinite)
    return notNaNArr.reduce((sum, cur) => sum + cur, 0) / (skipNaN ? arr.length : notNaNArr.length)
}
console.log("Task 2:", array_avg(testData2), array_avg(testData), array_avg(testData, true))

//Task 3
function* array_chunk (arr, count) {
    for (let i = 0; i < arr.length; i += count) {
        yield arr.slice(i, i + count)
    }
}
console.log("Task 3:", [...array_chunk(testData2, 2)])

//Task 4
array_skip_until = (arr, value) => (arr.indexOf(value) > -1) ? arr.slice(arr.indexOf(value)) : []
console.log("Task 4:", array_skip_until(testData, 2))

//Task 5
array_contains = (arr, search) => {
    const arrToStr = JSON.stringify(arr)
    const remSymbols = arrToStr.replace(/[|&:;$%'"<>(){}\[\]+,]/g, '  ').trim()
    const separatorSpace = remSymbols.replace(/\s{2,}/g, ' ')
    console.log("Task 5", search.test(separatorSpace))
}
array_contains(testData4, /raf.*/i)
array_contains(testData4, /^azaza.*/i)

//Task 6
array_get = (arr, path) => {
    if(path.match(/\[+[a-z]/i)) {
        let res1 = path.search(/\[+[a-z]/i)
        let res2 = path.lastIndexOf(']')
        path = path.replace(/\[+[a-z].*/i, '.' + path.substring(res1+1, res2))
    }
    const str = `arr${path}`
    console.log("Task 6:", eval(str))
}
array_get(testData4, '[5].name') // "Rafshan"
array_get(testData4, '[17][0][0][0][11][0]') // {name: "Rafshan", email: "rafshan@example.com", age: 11}
array_get(testData4, '[17][0][0][0][11][0][name]') // "Rafshan"

//Task 7
let counter7 = []
function path_search(arr, search, p) {
    if (p) arr = eval(`testData4${p}`)
    for(let key in arr) {
        if(arr.hasOwnProperty(key)) {
            if(arr[key] === search) return "[" + key + "]"
            else if(arr[key] && typeof arr[key] === "object") {
                let path = path_search(arr[key], search)
                if(path) return "[" + key + "]" + path
            }
        }
    }
}
get_right_format = (path, i, arr = 'testData4') => {
    if(path.match(/\[+[a-z]/i)) {
        let res1 = path.search(/\[+[a-z]/i)
        let res2 = path.lastIndexOf(']')
        path = path.replace(/\[+[a-z].*/i, '.' + path.substring(res1+1, res2))
    }
    const str = `${arr}${path} += ${i}`
    return [str, path]
}
array_search = (search, path) => {
    let i = 0
    while (i < 4) {
        let p = path_search(testData4, search, path)
        if (p === undefined) break
        if (path) p = path + p
        let getPath = get_right_format(p, i)
        counter7.push([getPath[1], search])
        eval(getPath[0].toString())
        i++
    }
    return counter7
}
console.log("Task 7:", array_search("Rafshan", '[17][0][0][0]'))

//Task 8
array_combine = (keys, values) => {
    const filteredKeys = testData.filter(item => typeof item !== 'boolean')
    return Object.fromEntries(filteredKeys.map((_, i) => [filteredKeys[i], values[i]]))
}
console.log("Task 8:", array_combine(testData, testData2)) // {1: 1, 2: 2, 1990: 1990, 85: 85, 24: 24, "Vasya": 5, "colya@example.com": 7, "Rafshan": 8.1, "ashan@example.com": undefined}

//Task 9
array_normalize = (arr, shema, transform = false) => {
    const fltr = arr.filter((item, i) => {
        if (typeof item !== 'boolean') {
            if (!transform && (typeof item === shema)) return item
            else if (transform && (typeof shema === 'string') && (typeof item !== 'object')) return item
            else if (transform && (typeof item === 'object') && (typeof shema === 'object')) return item.age
        }
    })

    const convertData = fltr.map(item => {
        if (typeof item === 'number') return item.toString()
        if (item.hasOwnProperty('age')) return (({age}) => ({age}))(item)
        return item
    })
    console.log("Task 9:", convertData)
}
// array_normalize(testData4, 'string') // ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
// array_normalize(testData4, 'string', true) // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
// array_normalize(testData4, {age: 'float'}) // []
array_normalize(testData4, {age: 'float'}, true) // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]

//Task 10
array_pluck = (arr, path) => {
    function parser(path) {
        const ar = path.split('.')
        let str = `item`
        ar.forEach(item => str += `['${item}']`)
        return str
    }

    if (path.includes('.')) console.log("Task 10:", arr.map(item => eval(parser(path))))
    else console.log("Task 10:", arr.map(item => item[path]))
}
array_pluck(testData3, 'name') // ["Vasya", "Dima", "Colya", "Misha", "Ashan", "Rafshan"]
array_pluck(testData3, 'skills.php') // [0, 5, 8, 6, 0, 0]


//Task 11
array_unique = arr => {
    const mySet = [...new Set(arr)]
    console.log("Task 11:", mySet)
}
array_unique(testData.concat(testData2)) // [1, 2, 1990, 85, 24, 5, 7, 8.1, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]

//Task 12
array_fill = (lenght, value) => {
    console.log("Task 12:", new Array(lenght).fill(value))
}
array_fill(5, 'string') // ['string', 'string', 'string', 'string', 'string']

//Task 19
let arr = [1, 2, 3, 4, 5, 6, 7, 8, "Vasya", "|", "123", 9, 10, 11, 12, 13, 14, 15]
let counter = 0
let timerId = setInterval(() => {
    console.log(arr.splice(0, 4))
    counter+=4
}, 4000)

// stop output in 22 sec
setTimeout(() => clearInterval(timerId), 22000);

//Task 21
const arrSkills = Object.keys(testData3[0].skills)
const neededData = testData3.map((item) => {
// console.log(item.skills[arrSkills[0]], item.name, arrSkills)
   return (({name, skills}) => ({name, skills}))(item)
})
arrSkills.forEach((skill, i) => {
    setTimeout(() => {
        neededData.sort(function (a, b) {
            if (a["skills"][skill] < b["skills"][skill]) return -1
            if (a["skills"][skill] > b["skills"][skill]) return 1
            if (a.name < b.name) return -1
            if (a.name > b.name) return 1
            return 0
        }).reverse()
        console.log(`----- ${skill.toUpperCase()} -----`)
        neededData.forEach(name =>  console.log(name.name))
    }, 1000 * i)
})
