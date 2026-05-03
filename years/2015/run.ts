console.log("Cool");
const args = process.argv.slice(2);
console.log(args);

const day = args[0];
const module = await import(`./src/days/${day}.ts`);
const part_one = module["part_one"]
if (part_one) part_one();

const part_two = module["part_two"]
if (part_two) part_two();
