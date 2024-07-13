import React, {useEffect, useRef, useState} from 'react'
import InputManager from './InputManager';
import Player from './Player';
import World from './World';


const ReactRogue = ({height, width, tilesize}) => {
    const canvasRef = useRef(null);
    const [player,setPlayer] = useState(new Player(1, 2, tilesize))
    const [world, setWorld] = useState(new World(width, height, tilesize))

    let newPlayer = new Player();
    let inputManager = new InputManager();

    const handleInput = (action, data) => {
        console.log(`handle input: ${action}: ${JSON.stringify(data)}`)
        Object.assign(newPlayer, player)
        
        newPlayer.move(data.x, data.y);
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

    //Draw The small square
    useEffect(()=>{
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, width*tilesize, height*tilesize);
        world.draw(ctx)
        player.draw(ctx)
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
