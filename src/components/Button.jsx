import React from 'react'
//This is a dynamic component, the props made it so it can be reusable!! and customizable
function Button({title, id, rightIcon, leftIcon, containerClass}) {
    return (
        <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full  px-7 
         py-3 text-black ${containerClass}`}>
            {leftIcon}
            <span className='relative incline-flex overflow-hidden font-general text-xs uppercase'>
                <div>
                    {title}
                </div>
            </span>
        </button>
    )
}

export default Button
