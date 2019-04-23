import React from 'react'

const AdComponent = props => {

  const { form } = props;

  return (
    <div style={{marginTop: '50px'}}>
      <button>{form.CTA}</button>
    </div>
  )
}

export default AdComponent
