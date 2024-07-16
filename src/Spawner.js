import Loot from "./Loot"

const lootTable = [
    {name: 'Long Sword', color: 'white', ascii:'/', offset: {x:6, y:3}},
    {name: 'Health Potion', color: 'red', ascii:'!', offset: {x:6, y:3}},
    {name: 'Gold coin', color: 'yellow', ascii:'?', offset: {x:3, y:3}},
    {name: 'Light Armor', color: 'green', ascii:'#', offset: {x:4, y:3}}
];

class Spawner {
    constructor(world){
        this.world = world;
    }

    spawn(spawnCount, createEntity){
        for(let count = 0; count < spawnCount; count++){
            let entity = createEntity();
            this.world.add(entity);
            this.world.moveToSpace(entity);
        }
    }

    spawnLoot(spawnCount) {
        console.log("loot")
        this.spawn(spawnCount, () => {
            return new Loot(
                // console.log("inside the loot"),
                getRandomInt(this.world.width),
                getRandomInt(this.world.height),
                this.world.tilesize,
                lootTable[getRandomInt(lootTable.length)]
            );
            // return new Loot(2,2, this.world.tilesize, lootTable[3])
        });
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export default Spawner;