type TImg =
  | ['backgroundImg', 'backgroundReady']
  | ['monsterImg', 'monsterReady']
  | ['humterImg', 'humterReady'];
interface Role {
  x: number;
  y: number;
}

class Humter implements Role {
  x: number;
  y: number;
  speed: number;
  constructor(x: number, y: number, speed: number) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
  //移动
  move(difTime: number, keysDown: TKeysDown) {
    if (37 in keysDown) {
      this.x -= this.speed * difTime;
    }
    if (38 in keysDown) {
      this.y -= this.speed * difTime;
    }
    if (39 in keysDown) {
      this.x += this.speed * difTime;
    }
    if (40 in keysDown) {
      this.y += this.speed * difTime;
    }
  }
}

class Monster implements Role {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

type TKeysDown = {
  [key: string]: boolean;
};

class Game {
  gameEnd: boolean = false;
  backgroundReady: boolean = false;
  monsterReady: boolean = false;
  humterReady: boolean = false;
  backgroundImg: HTMLImageElement | null = null;
  monsterImg: HTMLImageElement | null = null;
  humterImg: HTMLImageElement | null = null;
  canvas: HTMLCanvasElement | null = null;
  context: CanvasRenderingContext2D | null = null;
  keysDown: TKeysDown = {};
  humter: Humter;
  monster: Monster;
  caughtMonster: number = 0;
  lastTime: number = 0;
  constructor() {
    this.createCanvas();
    // 创建一个猎人
    this.humter = new Humter(0, 0, 256);
    // 创建一个怪兽
    this.monster = new Monster(0, 0);
    this.reset();
    this.initImg(['backgroundImg', 'backgroundReady']);
    this.initImg(['monsterImg', 'monsterReady']);
    this.initImg(['humterImg', 'humterReady']);
    this.listenAction();
    console.log('初始化结束');
  }
  // 创建画布
  createCanvas() {
    this.canvas = document.createElement('canvas');
    if (this.canvas instanceof HTMLCanvasElement) {
      this.context = this.canvas.getContext('2d');
      this.canvas.width = 512;
      this.canvas.height = 480;
    }
    let canvasWrap = document.getElementById('canvasWrap');
    if (canvasWrap instanceof HTMLElement) {
      canvasWrap.appendChild(this.canvas);
    }
  }
  // 初始化图片
  initImg([imgName, isImgReadyName]: TImg) {
    this[imgName] = new Image();
    if (this[imgName] as HTMLImageElement) {
      (this[imgName] as HTMLImageElement).onload = () => {
        this[isImgReadyName] = true;
      };
      (this[
        imgName
      ] as HTMLImageElement).src = require(`../asserts/images/${imgName}.png`);
    }
  }

  // 监听键盘操作
  listenAction() {
    window.addEventListener('keydown', e => {
      this.keysDown[e.keyCode] = true;
    });
    window.addEventListener('keyup', e => {
      delete this.keysDown[e.keyCode];
    });
  }

  // 绘制canvas
  draw() {
    if (this.context instanceof CanvasRenderingContext2D) {
      if (
        this.backgroundReady &&
        this.backgroundImg instanceof HTMLImageElement
      ) {
        this.context.drawImage(this.backgroundImg, 0, 0);
      }
      if (this.humterReady && this.humterImg instanceof HTMLImageElement) {
        this.context.drawImage(this.humterImg, this.humter.x, this.humter.y);
      }
      if (this.monsterReady && this.monsterImg instanceof HTMLImageElement) {
        this.context.drawImage(this.monsterImg, this.monster.x, this.monster.y);
      }
      this.context.fillStyle = 'rgba(250,250,250)';
      this.context.font = '24px Helvetica';
      this.context.textAlign = 'left';
      this.context.textBaseline = 'top';
      this.context.fillText(`Goblins caught ${this.caughtMonster}`, 32, 32);
    }
  }

  // 是否抓住怪兽
  isCaughtMonster() {
    if (
      this.humter.x >= this.monster.x - 32 &&
      this.humter.x <= this.monster.x + 32 &&
      this.humter.y >= this.monster.y - 32 &&
      this.humter.y <= this.monster.y + 32
    ) {
      this.caughtMonster++;
      this.reset();
    }
  }

  // 开始游戏
  start(time: number) {
    if (!this.gameEnd) {
      console.log(this, 'ttt', time - this.lastTime);
      this.humter.move((time - this.lastTime) / 1000, this.keysDown);
      this.isCaughtMonster();
      this.draw();
      this.lastTime = time;
      requestAnimationFrame(time => {
        this.start(time);
      });
    }
  }

  // 重置
  reset() {
    if (this.canvas instanceof HTMLCanvasElement) {
      this.humter.x = this.canvas.width / 2;
      this.humter.y = this.canvas.height / 2;

      this.monster.x = 32 + Math.random() * (this.canvas.width - 96);
      this.monster.y = 32 + Math.random() * (this.canvas.height - 96);
    }
  }
}

export default Game;
