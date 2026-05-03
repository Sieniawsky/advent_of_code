import { spawn } from "child_process";

function run(command: string, args: string[], cwd?: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const proc = spawn(command, args, { stdio: "inherit", cwd });

        proc.on("close", (exit_code) => {
            if (exit_code == 0) {
                resolve();
            } else {
                reject(new Error(`${command} exited with code: ${exit_code}`));
            }
        });
    });
}

export async function buildImage(contextPath: string, tag: string) {
    console.log(`→ Building Docker image: ${tag}`);
    await run("docker", ["build", "-t", tag, "."], contextPath);
}

export async function runContainer(tag: string, day: string) {
    console.log(`→ Running container: ${tag}`);

    await run("docker", ["run", "--rm", tag, day]);
}
