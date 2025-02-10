import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Users() {
  return (
    <div>
        <h2>Users Details Page..</h2>
        <h2>
            <Link to='/users/1'>Users 1</Link>
        </h2>
        <h2>
        <Link to='/users/2'>Users 2</Link>
        </h2>
        <h2>
        <Link to='/users/3'>Users 3</Link>
        </h2>
        <Outlet/>
    </div>
  )
}

export default Users