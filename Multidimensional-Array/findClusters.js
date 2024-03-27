function findClusters(matrix) {
  let size = matrix.length;
  let objectSavePosition = {};

  function isValidPosition(i, j) {
    return i >= 0 && i < size && j >= 0 && j < size;
  }

  function clusterCheck(i, j, currentElement) {
    return (
      (isValidPosition(i - 1, j) && currentElement === matrix[i - 1][j]) ||
      (isValidPosition(i + 1, j) && currentElement === matrix[i + 1][j]) ||
      (isValidPosition(i, j - 1) && currentElement === matrix[i][j - 1]) ||
      (isValidPosition(i, j + 1) && currentElement === matrix[i][j + 1])
    );
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let currentElement = matrix[i][j];

      if (clusterCheck(i, j, currentElement)) {
        if (!objectSavePosition.hasOwnProperty(currentElement)) {
          objectSavePosition[currentElement] = [];
        }

        objectSavePosition[currentElement].push([i, j]);
      }
    }
  }

  for (let [symbol, positions] of Object.entries(objectSavePosition)) {
    console.log(
      `Found cluster: symbol = ${symbol}, size = ${
        positions.length
      }, positions = ${positions
        .map((pos) => `(${pos[1]}, ${pos[0]})`)
        .join(", ")}`
    );
  }
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

findClusters(matrix);
