import Player from "./components/Player"
import Gameboard from "./components/Gameboard"
import GameOver from "./components/GameOver"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winning-combinations (1)"
import Log from "./components/Log";

function driveActivePlayer(turns) {
  let currPlayer = "X"
  if (turns.length > 0 && turns[0].player == "X") {
    currPlayer = "O"
  }
  return currPlayer

}

const initialGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]


function App() {
  // let [activePlayer, setActivePlayer] = useState("X");
  let [turns, setTurns] = useState([]);
  //let [hasWiiner,setHasWinner] = useState(false)

  let gameboard = [...initialGame.map(arr=>[...arr])]
  let winnner;
  for (const turn of turns) {
    let { squire, player } = turn
    let { row, col } = squire
    gameboard[row][col] = player

  }

  const activePlayer = driveActivePlayer(turns)
  let handleRematch = ()=>{
    setTurns([])
  }
  for (const combinations of WINNING_COMBINATIONS) {
    let firstSqureSymbol = gameboard[combinations[0].row][combinations[0].column]
    let secoundSqureSymbol = gameboard[combinations[1].row][combinations[1].column]
    let thirdSqureSymbol = gameboard[combinations[2].row][combinations[2].column]

    if (firstSqureSymbol && firstSqureSymbol === secoundSqureSymbol && firstSqureSymbol === thirdSqureSymbol) {
      winnner = firstSqureSymbol
    }

  }

  const hasDraw = turns.length == 9 && !winnner
  function handlesqure(rowIndex, colIndex) {
    //setActivePlayer((currPlayer) => currPlayer == "X" ? "O" : "X")
    setTurns((preTurn) => {
      let currPlayer = driveActivePlayer(preTurn)

      let updatedTurn = [{
        squire: {
          row: rowIndex,
          col: colIndex
        }, player: currPlayer
      }, ...preTurn]
      return updatedTurn
    })


  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player player="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player player="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {(winnner || hasDraw) && <GameOver winner={winnner} onRematch={handleRematch}/>}
        <Gameboard onSelect={handlesqure} activePlayer={activePlayer} board={gameboard}  />
      </div>
      <Log turns={turns} />
    </main>
  )
}

export default App
