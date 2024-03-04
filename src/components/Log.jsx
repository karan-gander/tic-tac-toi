
import React from 'react'

export default function Log({turns}) {
  return (
    <ol id="log">
        {turns.map((turn)=><li>{turn.player} Selected {turn.squire.rwo},{turn.squire.col}</li>)}
    </ol>
    )
}
