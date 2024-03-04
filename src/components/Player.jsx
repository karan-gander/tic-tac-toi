import React,{useState} from 'react'

const Player = ({player,symbol,isActive}) => {
    const [playerName,setPlayerName] = useState(player)
    const [isEdit,setIsEdit] = useState(false);
    let HandleEdit = ()=>{
        setIsEdit((editing=>!editing))
    }





    let handleChange =(event)=>{
        setPlayerName(event.target.value)
        
    }
  return (
    <li className={isActive?"active":undefined}>
    <span className="player">
     {isEdit? <input type="text" value={playerName} onChange={handleChange} required />: <span className="player-name">{playerName}</span> } 
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={HandleEdit}>{isEdit?"Save":"Edit"}</button>
  </li>
  )
}

export default Player