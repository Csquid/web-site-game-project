class Particles{
    constructor(x, y, count, rgb) {
        this.x = x || null;
        this.y = y || null;

        this.rgb = rgb || new Rgb();
        
        this.count = count || Particle.static.DEFAULT_PARTICLES_COUNT;

        this.buffer = new Array(this.count);
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    getRgb(){
        return this.rgb;
    }

    getCount(){
        return this.count;
    }

    setX(x){
        this.x = x || 0;
    }

    setY(y){
        this.y = y || 0;
    }

    setRgb(rgb){
        this.rgb = rgb || new Rgb();
    }

    setCount(count){
        this.count = count || 0;
        this.buffer.length = this.count
    }

    draw(){
        this.buffer.forEach(sprite=>{
            sprite.draw(sprite.get())
        })
    }
}	

Particle.static = Object.freeze({
    DEFAULT_PARTICLES_COUNT : 100
});