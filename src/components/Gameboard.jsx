import React,{ useState} from 'react'

const Gameboard = ({onSelect,board}) => {
    
    // let [gameboard,setGameboard] = useState(initialGame)
    // function handleGameBoard(rowIndex,colIndex){
    //     setGameboard((preGameBoard)=>{
    //         const updatedGameBoard = [...preGameBoard.map((innerArray)=>[...innerArray])]
    //         updatedGameBoard[rowIndex][colIndex] = activePlayer
    //         return updatedGameBoard
    //     })

    //     onSelect()
        

    // }
   return(
        <ol id='game-board'>
            {
                board.map((row, rowIndex) => {
                   return <li key={rowIndex}>
                        <ol>
                            {
                                row.map((playerSymbol, colIndex) => {
                                   return <button key={colIndex} onClick={()=>onSelect(rowIndex,colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button>
                                })
                            }
                        </ol>
                    </li>
                })
            }

        </ol>
    )
}

export default Gameboard