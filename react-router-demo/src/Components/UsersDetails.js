import React from 'react'
import { useParams } from 'react-router-dom'

function UsersDetails() {
  // const UserId = useParams();
  // const id = UserId.id;
  const {id} = useParams();
  return (
    <div>
        <h2>Users Details Page -- {id}</h2>
    </div>
  )
}

export default UsersDetails