import React from 'react'
import './Spinner.css' // Import the custom CSS

const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-56 bg-gray-50 dark:bg-gray-800">
      {/* Custom Loader */}
      <div className="loader"></div>
    </div>
  )
}

export default Spinner
