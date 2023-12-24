import * as fs from 'node:fs/promises';

export async function getLinesFromFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    
    // Ararry of each line of the file, filtering out empty lines
    const lines = data.split('\n').filter((line) => line);

    return lines;
  } catch (error) {
    throw error;
  }
}

export async function run(solutionFunction, inputPath) {
  try {
    const lines = await getLinesFromFile(inputPath);

    if (!Array.isArray(lines)) {
      throw new Error('input is not an array');
    }

    return solutionFunction(lines);
  } catch (error) {
    console.error(`[ERROR] : ${error.message ?? error}`);
  }
}