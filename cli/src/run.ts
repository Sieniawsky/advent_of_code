import path from 'path'
import { fileURLToPath } from 'url'
import { buildImageIfNeeded, runContainer } from './docker.js'
import { runLocal } from './local.js'

type Options = {
  docker?: boolean
}

export async function runCommand(year: string, day: string, options: Options) {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  const yearPath = path.resolve(__dirname, '../../years', year)
  const imageTag = `aoc-${year}`

  console.log(`→ Running AoC ${year} Day ${day}`)

  if (options.docker) {
    await buildImageIfNeeded(yearPath, imageTag)
    await runContainer(yearPath, imageTag, day)
  } else {
    await runLocal(yearPath, day)
  }
}
