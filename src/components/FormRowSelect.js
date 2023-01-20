import React from 'react'

const FormRowSelect = ({ name, handleChange, value, labelText, list }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className='form-input'
      >
        <option selected disabled value=''>
          {labelText || name}
        </option>
        {list.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default FormRowSelect
