import React from 'react'

const CenteredComponent = ({children}) => {
  return (
    <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center', flexDirection : 'column'}}>
        {children}
    </div>
  )
}

export default CenteredComponent