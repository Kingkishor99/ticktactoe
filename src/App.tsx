import { useMemo, useState } from 'react'
import './App.css'

type Player = 'X' | 'O'
type Cell = Player | ''

const WINNING_LINES: Array<[number, number, number]> = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function calculateWinner(board: Cell[]): Player | null {
  for (const [a, b, c] of WINNING_LINES) {
    const v = board[a]
    if (v && v === board[b] && v === board[c]) {
      return v
    }
  }
  return null
}

function App() {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(''))
  const [xNext, setXNext] = useState(true)

  const winner = useMemo(() => calculateWinner(board), [board])
  const isDraw = !winner && board.every((cell) => cell !== '')
  const status = winner
    ? `Winner: ${winner}`
    : isDraw
      ? 'Draw'
      : `Next player: ${xNext ? 'X' : 'O'}`

  const makeMove = (index: number) => {
    if (board[index] || winner) return
    const nextPlayer: Player = xNext ? 'X' : 'O'
    const nextBoard = [...board]
    nextBoard[index] = nextPlayer
    setBoard(nextBoard)
    setXNext(!xNext)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(''))
    setXNext(true)
  }

  return (
<<<<<<< HEAD
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>++New Project++</h1>
          <p>
            Editsasasas <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
=======
    <main className="tictactoe">
      <h1>Tic Tac Toe Game</h1>
      <p className="status">{status}</p>
>>>>>>> 83d4eb46802386d0ee2b3be667b0f7c402b30d2d

      <div className="board" role="grid" aria-label="Tic Tac Toe board">
        {board.map((cell, index) => (
          <button
            key={index}
            className="square"
            onClick={() => makeMove(index)}
            disabled={!!cell || !!winner || isDraw}
            aria-label={`Square ${index + 1}`}
          >
            {cell}
          </button>
        ))}
      </div>

      <button className="reset" onClick={resetGame}>
        Restart
      </button>
    </main>
  )
}

export default App
