import React from 'react'

const DarkMode = () => {
    
  return (
    
    <div className='relative'> 
      <img src="https://github.com/dilshad-ahmed/shopsy/blob/main/src/assets/website/light-mode-button.png?raw=true" alt=""
      className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10' />
      <img src="https://github.com/dilshad-ahmed/shopsy/blob/main/src/assets/website/dark-mode-button.png?raw=true" alt="" 
      className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300'/>
    </div>
  )
}

export default DarkMode
