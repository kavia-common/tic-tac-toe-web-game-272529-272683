import React from "react";
import PropTypes from "prop-types";
import "../styles/theme.css";

// PUBLIC_INTERFACE
/**
 * Contains Reset (restart) game controls.
 */
const Controls = React.memo(function Controls({ onReset, disabled }) {
  return (
    <div className="tictactoe-controls">
      <button
        type="button"
        className="tictactoe-reset-btn"
        onClick={onReset}
        disabled={disabled}
        aria-disabled={disabled}
        aria-label="Reset game and clear board"
      >
        Reset Game
      </button>
    </div>
  );
});

Controls.propTypes = {
  onReset: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Controls;
