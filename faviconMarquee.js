class FaviconMarquee {
    constructor(params) {
        this.size = params.size;
        this.text = params.text;
        this.color = params.color;
        this.step = params.step ?? 1;
        this.font = params.font;
        this.background = params.background;
        this.paddingBottom = params.paddingBottom;
        this.pixelsScrolled = 0;
    }

    start = (interval) => {
        this.favicon = document.createElement('link');
        this.favicon.type = 'image/png';
        this.favicon.rel = 'shortcut icon';
        document.head.appendChild(this.favicon);

        this.canvas = document.createElement('canvas');
        this.canvas.width = this.size;
        this.canvas.height = this.size;
        this.canvas.hidden = true;

        this.ctx = this.canvas.getContext('2d');
        this.ctx.font = this.size + "px " + this.font;
        this.textWidth = Math.ceil(this.ctx.measureText(this.text).width);

        document.body.appendChild(this.canvas);
        setInterval(this.draw, interval);
    };

    draw = () => {
        if (this.background) {
            this.ctx.fillStyle = this.background;
            this.ctx.rect(0, 0, this.size, this.size);
            this.ctx.fill();
        } else {
            this.ctx.clearRect(0, 0, this.size, this.size);
        }

        this.pixelsScrolled += this.step;
        if (this.pixelsScrolled > this.textWidth + 2 * this.size) { // 2 * this.size to begin and end with blank canvas
            this.pixelsScrolled = 0  // loop around
        }

        const canvasWidthOffset = -1 * this.pixelsScrolled + this.size; // negation of pixelsScrolled because canvas scrolls left-to-right
                                                                        // add this.size to begin rendering with blank canvas
        this.ctx.fillStyle = this.color;
        this.ctx.fillText(this.text, canvasWidthOffset, this.size - this.paddingBottom);

        this.favicon.href = this.canvas.toDataURL('image/png');

    }
}

