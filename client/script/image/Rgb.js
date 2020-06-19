class Rgb {
    static GET_UNSIGNED_BYTE(byte){
        return byte & 0xff;
    }
    
    constructor(r,g,b){
        this.r = r || 0;
        this.g = g || 0;
        this.b = b || 0
    }

    getAverage(){
        return (GET_UNSIGNED_BYTE(this.r) + GET_UNSIGNED_BYTE(this.g) + GET_UNSIGNED_BYTE(this.b)) / 3;
    }
    
    getRed() {
        return this.r;
    }

    getGreen() {
        return this.g;
    }

    getBlue() {
        return this.b;
    }

    setRed(r) {
        this.r = r;
    }

    setGreen(g) {
        this.g = g;
    }
    
    setBlue(b) {
        this.b = b;
    }
}