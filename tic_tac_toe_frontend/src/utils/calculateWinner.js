//
// PUBLIC_INTERFACE
/**
 * Determines the winner of a Tic Tac Toe board, and the winning line if present.
 * @param {Array<'X'|'O'|null>} squares - Array of 9 board squares.
 * @returns {{winner: 'X'|'O'|null, line: number[]|null, isDraw: boolean}}
 */
export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
    [0, 4, 8], [2, 4, 6]             // Diags
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c], isDraw: false };
    }
  }
  if (squares.every(sq => sq)) {
    return { winner: null, line: null, isDraw: true };
  }
  return { winner: null, line: null, isDraw: false };
}
