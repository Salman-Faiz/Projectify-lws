

const TaskInput = () => {
    return (
        <div className='mb-4'>
        <label
          htmlFor='taskName'
          className='mb-1 block text-sm font-medium text-gray-300'
        >
          Task Name
        </label>
        <input
          type='text'
          id='taskName'
          name='taskName'
          required
          className='w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'
        />
      </div>
    );
};

export default TaskInput;