import React from 'react'

function Student({std}) {
  return (
    <div>
        <h1>I am {std.name} and I am {std.age} Year Old.</h1>
    </div>
  )
}

export default Student