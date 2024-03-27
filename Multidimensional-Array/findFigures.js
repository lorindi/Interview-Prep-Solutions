function findFigures(matrix, configurations) {
  const result = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {

      for (const config of configurations) {
        const { symbol, width, height } = config;

        if (checkFigure(row, col, symbol, width, height)) {
          result.push({
            symbol,
            position: `(${col}, ${row})`,
            size: `(${width}, ${height})`,
          });
        }
      }
    }
  }

  function checkFigure(row, col, symbol, width, height) {
    if (row + height > matrix.length || col + width > matrix.length) {
      return false;
    }

    for (let i = row; i < row + height; i++) {
      for (let j = col; j < col + width; j++) {
        if (matrix[i][j] !== symbol) {
          return false;
        }
      }
    }
    return true;
  }

  result.forEach((figure) => {
    console.log(
      `Found figure: symbol = ${figure.symbol}, position = ${figure.position}, size = ${figure.size}`
    );
  });
}

const matrix = [
  [3, 3, 7, 7, 7, 7, 6, 6, 7, 7],
  [3, 3, 7, 7, 4, 4, 4, 4, 6, 3],
  [3, 3, 2, 7, 2, 2, 1, 1, 4, 3],
  [8, 2, 5, 5, 2, 1, 1, 3, 4, 3],
  [8, 9, 5, 1, 1, 1, 3, 3, 4, 3],
  [9, 2, 8, 9, 1, 1, 2, 2, 2, 7],
  [8, 1, 9, 1, 1, 9, 2, 5, 5, 4],
  [9, 8, 2, 8, 1, 1, 9, 8, 4, 7],
];

const configurations = [
  { symbol: 1, width: 2, height: 2 },
  { symbol: 2, width: 1, height: 2 },
  { symbol: 3, width: 2, height: 3 },
  { symbol: 7, width: 3, height: 1 },
];

findFigures(matrix, configurations);
