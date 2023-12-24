class Day2Utilities {
  static parseGame(game) {
    const gameId = Number(game.split(':')[0].split(' ')[1]);
    const rounds = game.split(':')[1].trim().split(';').map((round) => {
      const pulls = round.split(', ');
      const summary = {};

      pulls.forEach((pull) => {
        const count = pull.trim().split(' ')[0];
        const color = pull.trim().split(' ')[1];

        summary[color] = Number(count);
      });

      if (!summary.red) summary.red = 0;
      if (!summary.green) summary.green = 0;
      if (!summary.blue) summary.blue = 0;

      return summary;
    });

    return {
      gameId,
      rounds,
    };
  }

  static getColorCounts(gameData) {
    const red = [];
    const green = [];
    const blue = [];

    gameData.rounds.forEach((round) => {
      red.push(round.red);
      green.push(round.green);
      blue.push(round.blue);
    });

    return {
      gameId: gameData.gameId,
      red,
      green,
      blue,
    }
  }
}

export function day2part1(games) {
  const totalRed = 12;
  const totalGreen = 13;
  const totalBlue = 14;

  const solution = games.map((game) => {
    const gameData = Day2Utilities.parseGame(game);
    const possibilities = [];

    gameData.rounds.forEach((round) => {
      const isPossible = round.red <= totalRed && round.green <= totalGreen && round.blue <= totalBlue;
      possibilities.push(isPossible);
    });

    return possibilities.every((p) => p) ? gameData.gameId : 0;
  }).reduce((total, value) => total + value, 0);

  return solution;
}

export function day2part2(games) {
  const solution = games.map((game) => {
    const gameData = Day2Utilities.parseGame(game);
    const colorData = Day2Utilities.getColorCounts(gameData);

    const maxRed = Math.max(...colorData.red);
    const maxGreen = Math.max(...colorData.green);
    const maxBlue = Math.max(...colorData.blue);

    return maxRed * maxGreen * maxBlue;
  }).reduce((total, value) => total + value, 0);

  return solution;
}