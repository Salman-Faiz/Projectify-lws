const CategoryInput = () => {
  return (
    <div className='mb-4'>
      <label
        htmlFor='category'
        className='mb-1 block text-sm font-medium text-gray-300'
      >
        Category
      </label>
      <select
        id='category'
        name='category'
        required
        className='w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 '
      >
        <option value='Todo'>To-Do</option>
        <option value='Onprogress'>On Progress</option>
        <option value='Done'>Done</option>
        <option value='Revised'>Revised</option>
      </select>
    </div>
  )
}

export default CategoryInput
