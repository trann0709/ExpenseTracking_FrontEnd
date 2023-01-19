import { FormRow, FormRowSelect } from '../../components'
import { useExpenseContext } from '../../context/expense_context'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useEffect, useState } from 'react'

const AddExpense = () => {
  const {
    addExpense,
    handleChange,
    dateChange,
    isLoading,
    categories,
    payments,
    category,
    date,
    amount,
    description,
    paymentType,
    isEditing,
  } = useExpenseContext()

  // const [startDate, setStartDate] = useState(new Date())

  return (
    <article className='form'>
      <h2>{isEditing ? 'update expense' : 'add expense'}</h2>
      <form onSubmit={addExpense}>
        <FormRow
          type='text'
          name='description'
          value={description}
          handleChange={handleChange}
        />
        <div className='form-row'>
          <label htmlFor='date' className='form-label'>
            Date
          </label>
          <DatePicker
            selected={date}
            onChange={(data) => dateChange(data)}
            className='form-input'
          />
        </div>

        <FormRowSelect
          name='category'
          value={category}
          handleChange={handleChange}
          list={categories}
        />
        <FormRow
          type='number'
          name='amount'
          value={amount}
          handleChange={handleChange}
        />
        <FormRowSelect
          name='payment type'
          value={paymentType}
          handleChange={handleChange}
          list={payments}
        />
        <div className='btn-container'>
          <button type='button' className='btn' disabled={isLoading}>
            {isEditing ? 'update' : 'add'}
          </button>
          <button type='button' className='btn clear-btn' disabled={isLoading}>
            clear
          </button>
        </div>
      </form>
    </article>
  )
}

export default AddExpense
