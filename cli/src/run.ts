import path from "path";
import { fileURLToPath } from 'url';
import { buildImage, runContainer } from "./docker.js";

export async function runCommand(year: string, day: string) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const yearPath = path.resolve(__dirname, "../../years", year);
    const imageTag = `aoc-${year}`;

    console.log(`→ Running AoC ${year} Day ${day}`);

    await buildImage(yearPath, imageTag);
    await runContainer(imageTag, day);
}
