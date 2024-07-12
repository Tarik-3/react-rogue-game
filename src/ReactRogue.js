import React, {useEffect, useRef, useState} from 'react'
import InputManager from './InputManager';

const ReactRogue = ({height, width, tilesize}) => {
    const canvasRef = useRef(null);
    const [player,setPlayer] = useState({x:50, y: 100})


    let newPlayer = { ...player};
    let inputManager = new InputManager();
    const handleInput = (action, data) => {
        console.log(`handle input: ${action}: ${JSON.stringify(data)}`)
        console.log("Before", newPlayer)
        newPlayer.x += data.x;
        newPlayer.y += data.y
        console.log(newPlayer)
        setPlayer(newPlayer);
    }
    useEffect(() =>{
        console.log("Bind input");
        inputManager.bindKeys();
        inputManager.subscribe(handleInput);
        return () => {
            inputManager.unbindKeys();
            inputManager.unsubscribe(handleInput)
        }
    })

    //The small square
    useEffect(()=>{
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, width*tilesize, height*tilesize);
        ctx.fillStyle= '#259'; //Color and style
        ctx.fillRect(player.x, player.y, 15, 15) // position and size
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
