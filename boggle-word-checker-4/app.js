const testBoard = [
  ["E", "A", "R", "A"],
  ["N", "L", "E", "C"],
  ["I", "A", "I", "S"],
  ["B", "Y", "O", "R"],
];

function checkWord(board, word) {
  const wordsArray = word.split("");
  const firstLetter = wordsArray[0];

  const startingNodes = getStartingNodesCoordArray(board, firstLetter);

  if (!startingNodes.length) {
    return false;
  }

  if (wordsArray.length === 1) {
    return true;
  }

  return recursiveBoardTraversal(
    wordsArray.slice(1),
    startingNodes,
    board,
    new Set()
  );
}

function getStartingNodesCoordArray(board, firstLetter) {
  const nodesArray = [];

  for (let x = 0; x < board.length; x++) {
    board[x].forEach((boardLetter, y) => {
      if (firstLetter.toUpperCase() === boardLetter.toUpperCase()) {
        nodesArray.push([x, y]);
      }
    });
  }

  return nodesArray;
}

function getNodeNeighbors(nodeCoord, maxX, maxY) {
  const [x, y] = nodeCoord;
  const nodeNeighbors = [];

  for (let x0 = x - 1; x0 <= x + 1; x0++) {
    for (let y0 = y - 1; y0 <= y + 1; y0++) {
      if (
        x0 >= 0 &&
        x0 <= maxX &&
        y0 >= 0 &&
        y0 <= maxY &&
        !(x0 === x && y0 === y)
      ) {
        nodeNeighbors.push([x0, y0]);
      }
    }
  }
  return nodeNeighbors;
}

function getEdges(node, board, letter, checked) {
  const maxX = board.length - 1;
  const maxY = board[0].length - 1;
  const matches = [];

  const neighborsArr = getNodeNeighbors(node, maxX, maxY);
  neighborsArr.forEach((neighbor) => {
    const [x, y] = neighbor;
    const strNodeCoord = x + " ," + y;
    if (!checked.has(strNodeCoord) && letter === board[x][y]) {
      matches.push([x, y]);
    }
  });
  return matches;
}

function recursiveBoardTraversal(wordsArray, nodes, board, checked) {
  let result = false;
  const letter = wordsArray[0];

  if (wordsArray.length === 1) {
    nodes.forEach((node) => {
      result = result || !!getEdges(node, board, letter, checked).length;
    });
    return result;
  }

  if (nodes.length === 1) {
    const checkedCopy = new Set(checked);
    const [x, y] = nodes[0];
    const strNodeCoord = x + " ," + y;
    checkedCopy.add(strNodeCoord);
    const edges = getEdges(nodes[0], board, letter, checked);
    return recursiveBoardTraversal(
      wordsArray.slice(1),
      edges,
      board,
      checkedCopy
    );
  }

  nodes.forEach((node) => {
    result =
      result || recursiveBoardTraversal(wordsArray, [node], board, checked);
  });
  return result;
}
