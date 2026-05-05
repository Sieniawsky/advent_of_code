import _ from 'lodash'

export function partOne(input: string): number {
    const vowelsRegex = new RegExp('^(?=.*[aeiou].*[aeiou].*[aeiou]).*$')
    const doubleRegex = new RegExp('([a-zA-Z])\\1')
    const forbiddenRegex = new RegExp('(ab|cd|pq|xy)')

    let niceCount = 0
    _.each(input.split('\n'), (e) => {
        if (vowelsRegex.test(e) && doubleRegex.test(e) && !forbiddenRegex.test(e)) {
            niceCount += 1
        }
    })

    return niceCount
}

export function partTwo(input: string): number {
    const doubleRegex = new RegExp('^(?=.*([a-z]{2}).*\\1).*$')
    const oneInBetweenPairRegex = new RegExp('([a-z]).\\1')

    let niceCount = 0
    _.each(input.split('\n'), (e) => {
        if (doubleRegex.test(e) && oneInBetweenPairRegex.test(e)) {
            niceCount += 1
        }
    })

    return niceCount
}
