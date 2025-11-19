import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders board and controls, and allows moves", () => {
  render(<App />);
  // 9 squares, reset button, status
  expect(screen.getByLabelText(/tic tac toe board/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /reset game/i })).toBeInTheDocument();
  // All squares empty
  expect(screen.getAllByRole('button', { name: /empty/i })).toHaveLength(9);

  // Make a move: first square, should be X
  fireEvent.click(screen.getAllByRole('button', { name: /empty/i })[0]);
  expect(screen.getAllByRole('button')[0]).toHaveTextContent("X");
});

test("win detection highlights line and displays winner", () => {
  render(<App />);
  const squares = screen.getAllByRole('button', { name: /column/i });
  // X at 0, O at 3, X at 1, O at 4, X at 2: X wins first row
  fireEvent.click(squares[0]);
  fireEvent.click(squares[3]);
  fireEvent.click(squares[1]);
  fireEvent.click(squares[4]);
  fireEvent.click(squares[2]);
  expect(screen.getByText(/winner: X/i)).toBeInTheDocument();
  // Winning squares have special class
  const winningSquares = [
    squares[0], squares[1], squares[2]
  ];
  winningSquares.forEach(sq =>
    expect(sq.className).toContain("winner")
  );
});

test("draw detection", () => {
  render(<App />);
  const moves = [0,1,2,4,3,5,7,6,8];
  const squares = () =>
    screen.getAllByRole('button', { name: /column/i });
  moves.forEach(idx => fireEvent.click(squares()[idx]));
  expect(screen.getByText(/draw/i)).toBeInTheDocument();
});

test("reset button clears the board", () => {
  render(<App />);
  fireEvent.click(screen.getAllByRole('button', { name: /empty/i })[0]);
  fireEvent.click(screen.getByRole("button", { name: /reset game/i }));
  expect(screen.getAllByRole('button', { name: /empty/i })).toHaveLength(9);
});
