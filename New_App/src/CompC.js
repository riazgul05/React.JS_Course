import React, { useContext } from 'react'
import { ChannelContext, NameContext } from './App'


function CompC() {
  const myName = useContext(NameContext)
  const myChannelName = useContext(ChannelContext)

  return (
    <div>
      <h1>I am Component C</h1>
      <h1>{myName}</h1>
      <h1>{myChannelName}</h1>

    </div>
  )
}

export default CompC