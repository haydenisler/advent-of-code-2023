import { day1part1, day1part2 } from "./solutions/day1.js";
import { day2part1, day2part2 } from "./solutions/day2.js";
import { run } from "./utils.js";


async function main() {
  const solutions = {
    'Day 1': { 'Part 1': await run(day1part1, './inputs/day1.txt'), 'Part 2': await run(day1part2, './inputs/day1.txt') },
    'Day 2': { 'Part 1': await run(day2part1, './inputs/day2.txt'), 'Part 2': await run(day2part2, './inputs/day2.txt') },
  };

  console.table(solutions);
}

main();