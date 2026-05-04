import _ from 'lodash'
import { readFile } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function main() {
	const day = process.argv.slice(2)[0]

	if (!day) {
		console.error('Usage: pnpm exec tsx run.ts <day>.')
		process.exit(1)
	}

	let input: string
	const inputPath = path.join(__dirname, 'src', 'inputs', `${day}.txt`)
	try {
		input = await readFile(inputPath, 'utf-8')
	} catch {
		console.error(`Input for day ${day} does not exist.`)
		process.exit(1)
	}

	const module = await import(`./src/days/${day}.ts`)
	const parts = ['one', 'two']

	_.forEach(parts, (part: string) => {
		const fn: (input: string) => number | null = module[`part_${part}`]

		if (typeof fn !== 'function') {
			console.error(`Day ${day} does not implement part ${part}.`)
			process.exit(1)
		}

		const start = performance.now()
		const result: string = String(fn(input.trimEnd()))
		const end = performance.now()

		console.log(`Day ${day} part ${part} result: ${result}.`)
		console.log(`Time: ${(end - start).toFixed(2)}ms.`)
	})
}

main()
