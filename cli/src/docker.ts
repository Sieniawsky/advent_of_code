import { spawn, execSync } from 'child_process'

function run(command: string, args: string[], cwd?: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const proc = spawn(command, args, { stdio: 'inherit', cwd })

        proc.on('close', (exitCode) => {
            if (exitCode == 0) {
                resolve()
            } else {
                reject(new Error(`${command} exited with code: ${exitCode}`))
            }
        })
    })
}

export function imageExists(tag: string): boolean {
    try {
        execSync(`docker image inspect ${tag}`, { stdio: 'ignore' })
        return true
    } catch {
        return false
    }
}

export async function buildImageIfNeeded(contextPath: string, tag: string) {
    if (imageExists(tag)) return

    console.log(`→ Building Docker image: ${tag}`)
    await run('docker', ['build', '-t', tag, '.'], contextPath)
}

export async function runContainer(contextPath: string, tag: string, day: string) {
    console.log(`→ Running container: ${tag}`)

    await run('docker', [
        'run',
        '--rm',
        '-v',
        `${contextPath}:/app`,
        '-v',
        '/app/node_modules',
        tag,
        day,
    ])
}
