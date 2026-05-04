import _ from 'lodash'

export function partOne(input: string): number {
	interface CoordinatesCount {
		[key: string]: number
	}

	const moveCounts: CoordinatesCount = {}
	let x = 0,
		y = 0

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
			case 'V':
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

	return _.values(moveCounts).reduce((accumulator, count) => accumulator + count)
}
