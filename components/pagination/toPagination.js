exports.toPagination = function (...args) {
    if(args[0].hasOwnProperty("arr")) args[0] = args[0].arr
    if (typeof args[0] === 'object' && typeof args[1] === 'number') {
        return args[0].reduce((acc, val, i) => {
            let idx = Math.floor(i / args[1])
            let page = acc[idx] || (acc[idx] = [])
            page.push(val)

            return acc
        }, [])
    }
    if (args.length >= 3) return [args.join()]
    if (args[0] === false  && args.length === 2) return ['false']
}
