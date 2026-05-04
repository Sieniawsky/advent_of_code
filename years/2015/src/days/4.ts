import md5 from 'md5'

function findHashCollision(input: string, targetZeroesLength: number): number {
    const targetHashPrefix = new Array(targetZeroesLength).fill(0).join('')

    let found = false
    let attempt = 0
    while (!found) {
        const hash = md5(`${input}${attempt}`)
        if (hash.substring(0, targetZeroesLength) === targetHashPrefix) {
            found = true
        } else {
            attempt += 1
        }
    }

    return attempt
}

export function partOne(input: string): number {
    return findHashCollision(input, 5)
}

export function partTwo(input: string): number {
    return findHashCollision(input, 6)
}
