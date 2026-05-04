// src/local.ts
import { spawn } from 'child_process'

export function runLocal(yearPath: string, day: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const proc = spawn('bash', ['run.sh', day], {
            cwd: yearPath,
            stdio: 'inherit',
        })

        proc.on('close', (code) => {
            if (code === 0) resolve()
            else reject(new Error(`Local run failed (${code})`))
        })
    })
}
