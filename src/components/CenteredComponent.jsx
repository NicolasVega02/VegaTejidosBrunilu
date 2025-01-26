import React from 'react'

const CenteredComponent = ({children}) => {
  return (
    <div style={{display:'flex', alignItems:'center', minHeight:'80vh', flexDirection:'column', width:'100%'}}>
        {children}
    </div>
  )
}

export default CenteredComponent