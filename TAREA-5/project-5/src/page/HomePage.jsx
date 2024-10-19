import React from 'react'

const HomePage = (props) => {
   console.log(props,'props');
  return (
    <div>
        <h1>HomePage</h1>
        <h2>Nombre:{props.user}</h2>
    </div>
  )
}

export default HomePage