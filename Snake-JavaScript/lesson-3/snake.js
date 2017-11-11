const boardHeight = 50;
const boardWidth = 50;
const pixelDimension = 10;

let canvas;
let ctx;
function createBoard() {
    canvas = document.getElementById('canvas');
    canvas.setAttribute('width', pixelDimension * boardHeight);
    canvas.setAttribute('height', pixelDimension * boardWidth);
    canvas.setAttribute('style', 'border: 1px solid black;');
    ctx = canvas.getContext('2d');
}

function startGame(f, delay) {
    let gameOn = true;
    function tick() {
        if (gameOn) {
            f();
            setTimeout(tick, delay);
        }
    }
    function endGame() {
        gameOn = false;
    }
    tick();
    return endGame;
}

function clearBoard() {
    ctx.clearRect(0, 0, boardHeight * pixelDimension, boardWidth * pixelDimension);
}

function gameOver() {
    alert("Game Over!")
}

class Renderable {
    render() { throw new Error('The render function must be implemented!'); }
}

class Pixel extends Renderable {
    constructor(x, y, color) {
        super();
        this.x = x || 0;
        this.y = y || 0;
        this.color = color || 'rgb(255, 255, 0)';
    }

    render() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x * pixelDimension, this.y * pixelDimension, pixelDimension, pixelDimension);
    }
}

class Link {
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class Snake extends Renderable {
    constructor(x, y, color) {
        super();

        this.color = color || 'rgb(0, 0, 0)';

        this.head = new Link(new Pixel(x, y, this.color), null, null);

        this.tail = this.head;
        this.direction = Snake.NORTH;
        this.size = 1;
    }

    get headX() {
        return this.head.data.x;
    }

    get headY() {
        return this.head.data.y;
    }

    get tailX() {
        return this.tail.data.x;
    }

    get tailY() {
        return this.tail.data.y;
    }

    get body() {
        let node = this.head;
        const ret = [];
        while (node !== null) {
            ret.push([node.data.x, node.data.y]);
            node = node.next;
        }
        return ret;
    }

    static get NORTH() {
        return 'NORTH';
    }

    static get SOUTH() {
        return 'SOUTH';
    }

    static get EAST() {
        return 'EAST';
    }

    static get WEST() {
        return 'WEST';
    }

    render() {
        let node = this.head;
        while (node !== null) {
            node.data.render();
            node = node.next;
        }
    }

    move() {
        let newPixel;
        switch (this.direction) {
            case Snake.NORTH:
                newPixel = new Pixel(this.head.data.x, this.head.data.y - 1, this.color)
                break
            case Snake.SOUTH:
                newPixel = new Pixel(this.head.data.x, this.head.data.y + 1, this.color)
                break
            case Snake.EAST:
                newPixel = new Pixel(this.head.data.x + 1, this.head.data.y, this.color)
                break
            case Snake.WEST:
                newPixel = new Pixel(this.head.data.x - 1, this.head.data.y, this.color)
                break
        }

        let newHead = new Link(newPixel, this.head, null);
        this.head.prev = newHead;
        this.head = newHead;

        let newTail = this.tail.prev;
        this.tail.prev = null;
        newTail.next = null;
        this.tail = newTail;
    }

    grow() {
        let tailX = this.tail.data.x;
        let tailY = this.tail.data.y;

        let x = this.direction === Snake.WEST ? tailX + 1 :
                this.direction === Snake.EAST ? tailX - 1 : tailX;
        let y = this.direction === Snake.SOUTH ? tailY + 1 :
                this.direction === Snake.NORTH ? tailY - 1 : tailY;

        let newPixel = new Pixel(x, y, this.color);
        let newLink = new Link(newPixel, null, this.tail);
        this.tail.next = newLink;
        this.tail = newLink;
        this.size += 1;
    }
}

class Apple extends Pixel {
    constructor(x, y) {
        super(x, y, 'rgb(255, 0, 0)');
    }
}
