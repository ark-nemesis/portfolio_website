import React,{useState} from 'react';


function MouseTracker() {
    const [mousePosition,setMousePosition]=useState({x:0,y:0})

    const handleMouseEvent= (event)=>{
        console.log("Mouse Event",mousePosition)
  setMousePosition({x:event.clientX,y:event.clientY})
    }
  return (
    <div className='relative z-50' onMouseMove={handleMouseEvent}>
      <div
        className="absolute w-4 h-4 rounded-full border-2  bg-red-800"
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
        }}
      />
    </div>
  )
}

export default MouseTracker
