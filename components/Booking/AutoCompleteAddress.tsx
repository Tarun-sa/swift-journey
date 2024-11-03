import React from 'react'

const AutoCompleteAddress = () => {
  return (
    <div className='mt-5'>
        <div>
            <label className='autoComplete-label'>Where From ?</label>
            <input type="text" className='autoComplete-input'/>
        </div>
        <div>
            <label className='autoComplete-label'>Where To?</label>
            <input type="text" className='autoComplete-input'/>
        </div>
    </div>
  )
}

export default AutoCompleteAddress