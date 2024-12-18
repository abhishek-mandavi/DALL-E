import React from 'react'

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label className='block text-sm font-medium text-gray-900' htmlFor={name}>
          {labelName}
        </label>

        {isSurpriseMe && (
          <button className='font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black'
           type='button'
           onClick={handleSurpriseMe}
          >
            Suprise me
          </button>
        )}
      </div>
      
      <input
       type={type}
       id={name}
       name={name}
       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
       placeholder={placeholder}
       value={value}
       onChange={handleChange}
       required
      />
    </div>
  )
}

export default FormField
