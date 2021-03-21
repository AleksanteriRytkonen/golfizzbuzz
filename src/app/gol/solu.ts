export class Solu {
    posX: number;
    posY: number;
    alive: boolean;
    location: number;

    constructor (posX: number, posY: number, alive: boolean, location: number) {
        this.posX = posX;
        this.posY = posY;
        this.alive = alive;
        this.location = location;
    }
}