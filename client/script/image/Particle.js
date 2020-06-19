class Particle extends Sprite{
    constructor(x,y,) {
        
    }

    draw(){
        super.draw();
        this.nextParticle ? this.nextParticle.draw() : null;
    }
}	