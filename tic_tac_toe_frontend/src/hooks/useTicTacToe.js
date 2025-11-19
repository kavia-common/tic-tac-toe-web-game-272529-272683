import { useState, useCallback } from "react";
import { calculateWinner } from "../utils/calculateWinner";

// PUBLIC_INTERFACE
/**
 * Custom hook for managing Tic Tac Toe game state and transitions.
 */
export function useTicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // Result object: {winner, line, isDraw}
  const gameResult = calculateWinner(squares);

  const makeMove = useCallback(
    (idx) => {
      if (squares[idx] || gameResult.winner || gameResult.isDraw) return false;
      const next = squares.slice();
      next[idx] = xIsNext ? "X" : "O";
      setSquares(next);
      setXIsNext((prev) => !prev);
      return true;
    },
    [squares, xIsNext, gameResult.winner, gameResult.isDraw]
  );

  const resetGame = useCallback(() => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }, []);

  return {
    squares,
    xIsNext,
    makeMove,
    resetGame,
    gameResult,
  };
}
