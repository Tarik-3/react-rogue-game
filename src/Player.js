class Player {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    
}