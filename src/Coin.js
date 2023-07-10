import React from 'react'

const Coin = ({name, image,symbol, price,volume}) => {
  return (
    <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin'>
                <img src={image} alt='crypto'/>
                <h1>{name}</h1>
                <P className='coin-symbol'>{}symbol</P>
            </div>
             <div className='coin-data'>
              <p className='coin-price'>${price}</p>
              <P className='coin-volume'>${volume.toLocaleString()}</P>

             </div>
        </div>
    </div>
  )
}

export default Coin