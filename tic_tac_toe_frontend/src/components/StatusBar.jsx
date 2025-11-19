import React from "react";
import PropTypes from "prop-types";
import "../styles/theme.css";

// PUBLIC_INTERFACE
/**
 * Shows game status: current turn, winner, or draw.
 */
const StatusBar = React.memo(function StatusBar({ xIsNext, gameResult }) {
  let message;
  if (gameResult.winner) {
    message = `Winner: ${gameResult.winner} 🎉`;
  } else if (gameResult.isDraw) {
    message = "It's a draw!";
  } else {
    message = `Current turn: ${xIsNext ? "X" : "O"}`;
  }
  return <div className="status-bar" aria-live="polite">{message}</div>;
});

StatusBar.propTypes = {
  xIsNext: PropTypes.bool.isRequired,
  gameResult: PropTypes.shape({
    winner: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.oneOf([null]),
    ]),
    isDraw: PropTypes.bool.isRequired,
    line: PropTypes.oneOfType([PropTypes.array, PropTypes.oneOf([null])]),
  }).isRequired,
};

export default StatusBar;
