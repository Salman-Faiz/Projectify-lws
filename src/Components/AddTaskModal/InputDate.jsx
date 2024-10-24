const InputDate = () => {
  return (
    <div className='mb-4'>
      <label
        htmlFor='dueDate'
        className='mb-1 block text-sm font-medium text-gray-300'
      >
        Due Date
      </label>
      <input
        type='date'
        id='dueDate'
        name='dueDate'
        required
        className='w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'
      />
    </div>
  )
}

export default InputDate
