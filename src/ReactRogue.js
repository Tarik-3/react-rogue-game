import React, {useEffect, useRef} from 'react'

const ReactRogue = ({height, width, tilesize}) => {
    const canvasRef = useRef(null);
    useEffect(()=>{
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, width*tilesize, height*tilesize);
        ctx.fillStyle= '#259'; //Color and style
        ctx.fillRect(120, 170, 50, 50) // position and size
    })
  return (
    
      <canvas
        ref={canvasRef}
        height={height* tilesize}
        width={width * tilesize}
        style={{border: '2px solid red'}}
      ></canvas>
  )
}

export default ReactRogue
