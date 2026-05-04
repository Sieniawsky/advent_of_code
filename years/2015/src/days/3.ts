import _ from 'lodash'

interface MoveCountMap {
    [key: string]: number
}
function computeMoveCounts(input: string): MoveCountMap {
    const moveCounts: MoveCountMap = {}
    let x = 0
    let y = 0
    moveCounts[`${x},${y}`] = 1

    _.each(input.split(''), (value) => {
        switch (value) {
            case '^':
                y += 1
                break
            case '<':
                x -= 1
                break
            case '>':
                x += 1
                break
            case 'v':
                y -= 1
                break
            default:
                console.error(`Unexpected input ${value}.`)
        }

        const key = `${x},${y}`
        if (!moveCounts[key]) {
            moveCounts[key] = 0
        }
        moveCounts[key] += 1
    })

    return moveCounts
}

export function partOne(input: string): number {
    return _.keys(computeMoveCounts(input)).length
}

export function partTwo(input: string): number {
    const santaMoves: string[] = []
    const roboMoves: string[] = []

    _.each(input.split(''), (move, index) => {
        if (index % 2 === 0) {
            santaMoves.push(move)
        } else {
            roboMoves.push(move)
        }
    })

    const santaMoveCounts = computeMoveCounts(santaMoves.join(''))
    const roboMoveCounts = computeMoveCounts(roboMoves.join(''))

    return _.uniq(_.concat(_.keys(santaMoveCounts), _.keys(roboMoveCounts))).length
}
