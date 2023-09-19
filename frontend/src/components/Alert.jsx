import React from 'react'

const Alert = ({msg,color}) => {
  return (
<div id="toast-default" class={` ${color} top-10 right-10 absolute flex items-center w-full max-w-xs p-4 rounded-lg shadow `} role="alert">
   
    <div class="ml-3 text-md font-bold text-white">{msg}</div>
   
</div>

  )
}

export default Alert