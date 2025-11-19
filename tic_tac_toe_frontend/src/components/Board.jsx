import React from "react";
import PropTypes from "prop-types";
import Square from "./Square";
import "../styles/theme.css";

/**
 * PUBLIC_INTERFACE
 * Renders the Tic Tac Toe 3x3 board.
 */
const Board = React.memo(function Board({
  squares,
  onMove,
  winningLine,
  isBoardDisabled,
  lastMoveIndex,
}) {
  // For better keyboard UX, focus the next available square if just made a move
  return (
    <div
      className="tictactoe-board"
      role="grid"
      aria-label="Tic Tac Toe game board, 3 by 3"
      tabIndex={-1}
      data-testid="ttt-board"
    >
      {squares.map((value, idx) => (
        <Square
          key={idx}
          value={value}
          index={idx}
          ariaLabel={`Row ${1 + Math.floor(idx / 3)} Column ${1 + (idx % 3)}: ${value ? value : "empty"}`}
          isWinning={winningLine && winningLine.includes(idx)}
          isDisabled={isBoardDisabled || !!value}
          onClick={onMove}
          autoFocus={lastMoveIndex === idx}
        />
      ))}
    </div>
  );
});
Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
  ).isRequired,
  onMove: PropTypes.func.isRequired,
  winningLine: PropTypes.arrayOf(PropTypes.number),
  isBoardDisabled: PropTypes.bool,
  lastMoveIndex: PropTypes.number,
};

export default Board;
