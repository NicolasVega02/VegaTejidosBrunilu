import React from 'react'
import { GridLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div style={{width:'100%', height:'80vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <GridLoader color="#fd7e14" />
    </div>
  )
}

export default Loader