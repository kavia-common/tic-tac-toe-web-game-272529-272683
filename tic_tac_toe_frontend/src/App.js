import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './styles/theme.css';
import Board from './components/Board';
import StatusBar from './components/StatusBar';
import Controls from './components/Controls';
import { useTicTacToe } from './hooks/useTicTacToe';

function App() {
  // Theme handling for dark mode support (retained from base template)
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  // Main Tic Tac Toe game business logic
  const { squares, xIsNext, makeMove, resetGame, gameResult } = useTicTacToe();
  const [lastMoveIndex, setLastMoveIndex] = useState(null);

  // Save where the last move focus landed for accessibility (tabbing after marking)
  const handleSquareMove = (idx) => {
    if (makeMove(idx)) setLastMoveIndex(idx);
  };

  // Reset focus highlight on game reset
  useEffect(() => {
    setLastMoveIndex(null);
  }, [squares.join(''), gameResult.winner, gameResult.isDraw]);

  const isBoardDisabled = !!gameResult.winner || gameResult.isDraw;

  return (
    <div className="tictactoe-gradient-bg" data-testid="ttt-bg">
      <div className="tictactoe-container" role="main" aria-label="Tic Tac Toe Game">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          style={{ position: 'absolute', top: 10, right: 12 }}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>

        <StatusBar xIsNext={xIsNext} gameResult={gameResult} />

        <Board
          squares={squares}
          onMove={handleSquareMove}
          winningLine={gameResult.line}
          isBoardDisabled={isBoardDisabled}
          lastMoveIndex={lastMoveIndex}
        />

        <Controls onReset={resetGame} disabled={false} />

        <footer style={{ marginTop: '2rem', color: '#7d8590', fontSize: '.96rem', textAlign: 'center', opacity: 0.85 }}>
          <span style={{ marginRight: 8 }}>Ocean Professional Theme</span>
          <a href="https://github.com" style={{ color: '#2563EB', textDecoration: 'none' }}>GitHub</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
