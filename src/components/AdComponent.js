import React from 'react'

const AdComponent = props => {

  const { form } = props;

  return (
    <div style={{
      margin: 'auto',
      marginTop: '50px',
      width: '300px',
      height: '250px',
      position: 'relative',
      border: '1px solid white',
      }}>
      <h1>2019 Honda Civic LX</h1>
      <button style={{
        borderRadius: '4px',
        background: 'green',
        color: 'white',
        border: 'none',
        padding: '10px 32px',
        fontSize: '26px',
        margin: 'auto'
      }}>{form.CTA}</button>
    </div>
  )
}

export default AdComponent
