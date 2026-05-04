import _ from 'lodash'

export function partOne(input: string): number {
	let sum = 0
	_.each(input.split('\n'), (row) => {
		let rowResult = 0
		const dimensions: number[] = _.map(row.split('x'), (d) => Number(d))

		if (dimensions[0] && dimensions[1] && dimensions[2]) {
			const areas = [
				dimensions[0] * dimensions[1],
				dimensions[1] * dimensions[2],
				dimensions[0] * dimensions[2],
			]
			rowResult = _.reduce(
				[
					..._.map(areas, (area) => {
						return area * 2
					}),
					Math.min(...areas),
				],
				(accumulator, dimension): number => accumulator + dimension,
				0,
			)
		}
		return (sum += rowResult)
	})

	return sum
}
export function partTwo(input: string): number {
	let sum = 0

	_.each(input.split('\n'), (row) => {
		let rowResult = 0
		const dimensions: number[] = _.map(row.split('x'), (d) => Number(d)).sort((a, b) => a - b)

		if (dimensions[0] && dimensions[1] && dimensions[2]) {
			rowResult = _.reduce(
				[
					2 * dimensions[0],
					2 * dimensions[1],
					dimensions[0] * dimensions[1] * dimensions[2],
				],
				(accumulator, dimension) => accumulator + dimension,
				0,
			)
		}

		sum += rowResult
	})

	return sum
}
