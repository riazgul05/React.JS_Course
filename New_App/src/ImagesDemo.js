import React from 'react'
import Koala from './images/Koala.jpg'

function ImagesDemo() {
  return (
    <div>
      <>
        <div>ImagesDemo</div>
        <img src={Koala} height={200} width={200} />
        <img src={require('./images/Penguins.jpg')} height={200} width={200} />
        <img src='Images/Tulips.jpg' height={200} width={200} />
      </>
    </div>
  )
}

export default ImagesDemo