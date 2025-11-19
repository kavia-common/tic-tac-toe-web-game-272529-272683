import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/theme.css";

// PUBLIC_INTERFACE
/**
 * Single interactive cell of the Tic Tac Toe board.
 */
const Square = React.memo(function Square({
  value,
  onClick,
  index,
  isWinning,
  isDisabled,
  ariaLabel,
  autoFocus,
}) {
  const btnRef = useRef(null);
  useEffect(() => {
    if (autoFocus && btnRef.current) btnRef.current.focus();
  }, [autoFocus]);
  return (
    <button
      type="button"
      role="button"
      aria-label={ariaLabel}
      aria-pressed={!!value}
      aria-disabled={isDisabled}
      className={
        "tictactoe-square" +
        (isWinning ? " winner" : "") + 
        (isDisabled ? " disabled" : "")
      }
      ref={btnRef}
      tabIndex={isDisabled ? -1 : 0}
      disabled={isDisabled}
      data-testid={`ttt-square-${index}`}
      autoFocus={autoFocus}
      onClick={() => onClick(index)}
      onKeyDown={(e) => {
        if (
          e.key === "Enter" ||
          e.key === " " ||
          e.key === "Spacebar"
        ) {
          e.preventDefault();
          if (!isDisabled) onClick(index);
        }
      }}
    >
      <span aria-hidden="true">{value}</span>
    </button>
  );
});

Square.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isWinning: PropTypes.bool,
  isDisabled: PropTypes.bool,
  ariaLabel: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
};

export default Square;
