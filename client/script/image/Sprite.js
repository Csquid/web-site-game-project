class Sprite {
	constructor(x,y,a,ctx, img) {
		this.xpos = x || 0;
		this.ypos = y || 0;
		this.angle = a || 0;
		this.ctx = ctx || null;
		this.img = img || null;
	}

	getXpos() {
		return this.xpos;
	}

	getYpos() {
		return this.ypos;
	}
  
	getAngel() {
		return this.angle;
	}

	getCtx() {
		return this.ctx;
 	}

	getImage() {
		return this.img;
	}

	setXpos(x) {
		this.xpos = x;
	}

	setYpos(y) {
		this.ypos = y;
	}

	setAngle(a) {
		this.angle = a % 360;
	}

	setCtx(ctx) {
		return this.ctx;
	}

	setImage(img) {
		this.img = img;
	}

	draw(sWidth, sHeight, dx, dy, dWidth, dHeight) {
		//https://developer.mozilla.org/ko/docs/Web/HTML/Canvas/Tutorial/Basic_usage 캔버스
		//https://m.blog.naver.com/PostView.nhn?blogId=javaking75&logNo=140170208333&proxyReferer=https:%2F%2Fwww.google.com%2F 사용법

		this.ctx.drawImage (getImage(), getXpos(), getYpos(), sWidth, sHeight, dx, dy, dWidth, dHeight);
	}
}