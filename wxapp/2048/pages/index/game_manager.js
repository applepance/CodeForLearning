const Grid = require('./grid.js');

function GameManager(size, startTiles = 2) {
  this.size = size;
  this.startTiles = startTiles;
}

GameManager.prototype = {
  setup: function() {
    this.grid = new Grid(this.size);
    this.addStartTiles();
    return this.grid.cells;
  },
  addStartTiles: function() {
    for (let tile = 0; tile < this.startTiles; tile++) {
      this.addRandomTiles();
    }
  },
  addRandomTiles: function() {
    if (this.grid.cellAvailable()) {
      const value = Math.random() < 0.9 ? 2 : 4;
      // 随机位置
      const cell = this.grid.randomAvailableCell();
      const tile = {
        x: cell.x,
        y: cell.y,
        value: value
      }
      // 插入
      this.grid.insertTile(tile);
    }
  }
}

module.exports = GameManager;