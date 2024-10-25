

const Description = () => {
    return (
        <div className='mb-4'>
        <label
          htmlFor='description'
          className='mb-1 block text-xl font-medium text-gray-300'
        >
          Description
        </label>
        <textarea
          id='description'
          name='description'
          required
          rows='3'
          className='w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'
        ></textarea>
      </div>
    );
};

export default Description;