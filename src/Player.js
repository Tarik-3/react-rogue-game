import Entity from "./Entity"
class Player extends Entity{

    attributes = {
        name: "Player",
        ascii: "@",
        health: 10
    }

    move(dx, dy) {
        this.x += dx;
        // if(this.y===0 && dy===-1) this.y =10;
        // if(this.y===9 && dy===+1) this.y =0;
        // if(this.x===20 && dx===+1) this.x =0;
        // if(this.x===0 && dx===-1) this.x =19;
        this.y += dy;
    } 

    
    copyPlayer() {
        let newPlayer = new Player();
        Object.assign(newPlayer, this);
        return newPlayer;
    }

    // draw(context) {
    //     context.fillStyle = "#f00"
    //     context.textBaseline = 'hanging';
    //     context.font = '16px Helvetica';
    //     context.fillText('@', this.x * this.size, this.y * this.size);
    // }


}

export default Player;